"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Code2,
  Database,
  Brain,
  Palette,
  Shield,
  Cpu,
  Globe,
  type LucideIcon,
} from "lucide-react";
import ProgressBar from "./ProgressBar";

interface CourseCardProps {
  title: string;
  iconName: string;
  progress: number;
  index?: number;
}

const iconMap: Record<string, LucideIcon> = {
  Atom,
  Code2,
  Database,
  Brain,
  Palette,
  Shield,
  Cpu,
  Globe,
};

const iconBgGradients = [
  "from-violet-500 to-blue-500",
  "from-cyan-500 to-teal-500",
  "from-fuchsia-500 to-pink-500",
  "from-amber-500 to-orange-500",
];

const barGradients = [
  "from-violet-500 to-blue-500",
  "from-cyan-500 to-teal-500",
  "from-fuchsia-500 to-pink-500",
  "from-amber-500 to-orange-500",
];

export default function CourseCard({
  title,
  iconName,
  progress,
  index = 0,
}: CourseCardProps) {
  const Icon = iconMap[iconName] ?? Atom;
  const gradIndex = index % iconBgGradients.length;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.15 + index * 0.08,
      }}
      whileHover={{
        scale: 1.015,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      className="group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-[#0c0c14] grain-overlay glow-border transition-all duration-300 hover:border-white/90"
    >
      <div className="relative p-6 sm:p-7">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${iconBgGradients[gradIndex]} shadow-lg shadow-black/30`}
          >
            <Icon size={22} className="text-white" />
          </div>

          <div className="min-w-0">
            <h3 className="text-base font-bold text-white tracking-tight leading-snug line-clamp-2">
              {title}
            </h3>
            <p className="mt-0.5 text-xs text-zinc-550 font-semibold">
              Course module
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold">
            <span className="text-zinc-500">Progress</span>
            <span className="font-mono font-bold text-white">{progress}%</span>
          </div>

          <ProgressBar
            value={progress}
            delay={0.4 + index * 0.1}
            gradient={barGradients[gradIndex]}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={`mt-5 w-full rounded-2xl bg-zinc-900/80 border border-zinc-800 py-3 text-xs font-bold text-zinc-350 tracking-wide hover:text-white hover:border-zinc-700 transition-all cursor-pointer`}
        >
          Continue Learning
        </motion.button>
      </div>
    </motion.article>
  );
}