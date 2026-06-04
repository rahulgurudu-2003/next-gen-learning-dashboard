"use client";

import { motion } from "framer-motion";
import { Flame, Calendar, BookOpen } from "lucide-react";

export default function HeroTile() {
  const getFormattedDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "short",
      day: "numeric",
    };
    return new Date().toLocaleDateString("en-US", options);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.05,
      }}
      className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-[#0c0c14] p-6 sm:p-8 grain-overlay h-full flex flex-col justify-between min-h-55 transition-all duration-300 hover:border-white/90"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/5 blur-[90px]"
      />

      <div className="relative flex flex-col h-full justify-between gap-6">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400">
              Overview
            </span>
            <div className="flex items-center gap-1.5 text-zinc-500">
              <Calendar size={12} />
              <span className="text-[11px] font-semibold">{getFormattedDate()}</span>
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 280, damping: 22 }}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl mt-3"
          >
            Welcome Back, Rahul 👋
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-3 max-w-xl text-sm text-zinc-400 leading-relaxed font-medium"
          >
            Keep learning, keep growing. You&apos;re making great progress this week.
          </motion.p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.45,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-zinc-300 transition-colors hover:border-zinc-755"
          >
            <Flame size={14} className="text-orange-400 shrink-0" />
            <span className="text-xs font-semibold">19 Day Streak</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.55,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-zinc-300 transition-colors hover:border-zinc-755"
          >
            <BookOpen size={14} className="text-cyan-400 shrink-0" />
            <span className="text-xs font-semibold">4 Active Courses</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}