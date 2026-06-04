"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Brain,
  Code2,
  Database,
  Palette,
  Shield,
  Cpu,
  Globe,
  type LucideIcon,
} from "lucide-react";

interface CourseCatalogCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  price: number;
  iconName: string;
}

const iconMap: Record<string, LucideIcon> = {
  Atom,
  Brain,
  Code2,
  Database,
  Palette,
  Shield,
  Cpu,
  Globe,
};

export default function CourseCatalogCard({
  title,
  description,
  level,
  duration,
  price,
  iconName,
}: CourseCatalogCardProps) {
  const Icon = iconMap[iconName] ?? Brain;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.015,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
      }}
      className="relative group overflow-hidden rounded-3xl border border-zinc-800/80 bg-[#0c0c14] grain-overlay transition-all duration-300 hover:border-white/90"
    >
      <div className="flex h-36 items-center justify-center bg-linear-to-br from-violet-600/80 to-cyan-600/80">
        <Icon size={48} className="text-white" />
      </div>

      <div className="relative p-6 sm:p-7">
        <h3 className="text-lg font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-semibold text-violet-400">
            {level}
          </span>
          <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-semibold text-cyan-400">
            {duration}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <h4 className="text-xl font-extrabold text-white">
            ₹{price}
          </h4>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="rounded-xl bg-linear-to-r from-violet-600 to-cyan-600 px-4 py-2 text-sm font-semibold text-white opacity-90 hover:opacity-100 cursor-pointer"
          >
            View More
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}