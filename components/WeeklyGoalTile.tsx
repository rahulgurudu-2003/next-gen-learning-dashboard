"use client";

import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

export default function WeeklyGoalTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.12,
      }}
      whileHover={{
        scale: 1.015,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-[#0c0c14] p-6 sm:p-7 grain-overlay h-full flex flex-col justify-between transition-all duration-300 hover:border-white/90"
    >
      <div className="relative flex flex-col h-full justify-between gap-5">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400">
            Weekly Goal
          </h3>
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
            On Track
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 280, damping: 22 }}
          className="mt-2"
        >
          <h2 className="text-4xl font-extrabold text-white lg:text-5xl tracking-tight">
            92%
          </h2>
          <p className="mt-1.5 text-xs font-semibold text-zinc-500">
            Goal Completion
          </p>
        </motion.div>

        <div className="mt-2">
          <div className="mb-2 flex justify-between text-xs font-semibold">
            <span className="text-zinc-400">Progress</span>
            <span className="font-mono text-white">92 / 100 XP</span>
          </div>
          <ProgressBar value={92} delay={0.5} />
        </div>

        <div className="mt-2 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-zinc-900/50 p-4 border border-zinc-800/40">
            <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Lessons</p>
            <p className="mt-1 text-xl font-extrabold text-white">24</p>
          </div>
          <div className="rounded-2xl bg-zinc-900/50 p-4 border border-zinc-800/40">
            <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Hours</p>
            <p className="mt-1 text-xl font-extrabold text-white">18.5h</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
