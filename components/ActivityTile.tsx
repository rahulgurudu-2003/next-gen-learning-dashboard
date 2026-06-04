"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const weeks = 20;
const daysPerWeek = 7;

function generateActivity(): number[][] {
  const pattern: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const row: number[] = [];
    for (let d = 0; d < daysPerWeek; d++) {
      const seed = (w * 7 + d * 13 + 5) % 17;
      if (seed < 5) row.push(0);
      else if (seed < 9) row.push(1);
      else if (seed < 13) row.push(2);
      else row.push(3);
    }
    pattern.push(row);
  }
  return pattern;
}

const activity = generateActivity();
const dayLabels = ["Mon", "", "Wed", "", "Fri", "", ""];

const colorClasses = [
  "bg-zinc-800/60 border-zinc-700/30",
  "bg-violet-800/90 border-violet-700/40",
  "bg-violet-500 border-violet-400/40",
  "bg-violet-300 border-violet-200/50",
];

const actionCountMap = [0, 2, 5, 8];

export default function ActivityTile() {
  const [hoveredCell, setHoveredCell] = useState<{
    week: number;
    day: number;
    val: number;
  } | null>(null);

  const getDayName = (dayIndex: number) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[dayIndex];
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.5,
      }}
      whileHover={{
        scale: 1.015,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-[#0c0c14] p-6 sm:p-7 grain-overlay h-full flex flex-col justify-between transition-all duration-300 hover:border-white/90"
    >
      <div className="relative flex flex-col h-full justify-between gap-5">
        <header className="flex items-start justify-between min-h-12">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">
              Learning Activity
            </h3>
            <AnimatePresence mode="wait">
              {hoveredCell ? (
                <motion.p
                  key="hovered"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="mt-0.5 text-xs text-violet-300 font-semibold"
                >
                  {getDayName(hoveredCell.day)} (Week {hoveredCell.week + 1}):{" "}
                  <span className="text-white">
                    {actionCountMap[hoveredCell.val]} lessons completed
                  </span>
                </motion.p>
              ) : (
                <motion.p
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-0.5 text-xs text-zinc-500 font-medium"
                >
                  Contribution graph — last 20 weeks
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </header>

        <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-none select-none">
          <div className="flex flex-col gap-1 pr-1 pt-0.5">
            {dayLabels.map((label, i) => (
              <div
                key={i}
                className="flex h-3 items-center text-[9px] font-bold text-zinc-500"
              >
                {label}
              </div>
            ))}
          </div>

          <div className="flex gap-[3.5px]">
            {activity.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3.5px]">
                {week.map((val, di) => (
                  <motion.div
                    key={`${wi}-${di}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5 + (wi * 0.015 + di * 0.008),
                      duration: 0.12,
                    }}
                    onMouseEnter={() =>
                      setHoveredCell({ week: wi, day: di, val })
                    }
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`h-3 w-3 rounded-[3px] border ${colorClasses[val]} transition-all duration-200 hover:scale-130 hover:border-violet-300 hover:z-10 cursor-crosshair`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-zinc-500">
            <span>Less</span>
            <div className="flex gap-1">
              {colorClasses.map((c, i) => (
                <div
                  key={i}
                  className={`h-2.5 w-2.5 rounded-xs border ${c}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>

          <div className="grid grid-cols-3 gap-2 border-t border-zinc-900/60 pt-4">
            <div className="text-center">
              <p className="text-[9px] uppercase font-bold tracking-wider text-zinc-500">Total Actions</p>
              <p className="mt-1 text-lg font-extrabold text-white">124</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] uppercase font-bold tracking-wider text-zinc-500">Active Days</p>
              <p className="mt-1 text-lg font-extrabold text-white">89</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] uppercase font-bold tracking-wider text-zinc-500">Growth</p>
              <p className="mt-1 text-lg font-extrabold text-violet-400">+23%</p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}