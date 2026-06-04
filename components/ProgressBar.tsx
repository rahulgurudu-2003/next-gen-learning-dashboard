"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  delay?: number;
  gradient?: string;
}

export default function ProgressBar({
  value,
  delay = 0,
  gradient = "from-violet-500 to-cyan-500",
}: ProgressBarProps) {
  return (
    <div className="h-2.5 overflow-hidden rounded-full bg-zinc-800/80">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(value, 100)}%` }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay,
        }}
        className={`h-full rounded-full bg-linear-to-r ${gradient}`}
      />
    </div>
  );
}
