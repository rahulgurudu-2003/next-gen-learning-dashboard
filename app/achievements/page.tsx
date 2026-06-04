"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Share2,
  Lock,
  CheckCircle2,
  Award,
  Zap,
  Clock,
  Sparkles,
  Calendar,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";

const categories = ["All", "Skill Mastery", "Speed", "Streak", "Upcoming"];

interface Badge {
  id: string;
  title: string;
  description: string;
  category: string;
  tier: "Common" | "Rare" | "Epic";
  points: number;
  unlocked: boolean;
  iconName: "Trophy" | "Zap" | "Clock" | "Award" | "Sparkles";
}

const initialBadges: Badge[] = [
  {
    id: "1",
    title: "Sharp",
    description: "Submit 5 correct answers in a row.",
    category: "Skill Mastery",
    tier: "Rare",
    points: 75,
    unlocked: true,
    iconName: "Trophy",
  },
  {
    id: "2",
    title: "Laser",
    description: "Write code with zero syntax errors.",
    category: "Skill Mastery",
    tier: "Epic",
    points: 100,
    unlocked: true,
    iconName: "Sparkles",
  },
  {
    id: "3",
    title: "Rocketeer",
    description: "Complete a full module in under 10 minutes.",
    category: "Speed",
    tier: "Rare",
    points: 75,
    unlocked: true,
    iconName: "Zap",
  },
  {
    id: "4",
    title: "Night Owl",
    description: "Submit lessons between 12 AM and 4 AM.",
    category: "Streak",
    tier: "Common",
    points: 50,
    unlocked: true,
    iconName: "Clock",
  },
  {
    id: "5",
    title: "Comeback King",
    description: "Recover a broken 10-day streak.",
    category: "Streak",
    tier: "Epic",
    points: 100,
    unlocked: false,
    iconName: "Award",
  },
  {
    id: "6",
    title: "Momentum Builder",
    description: "Gain 500 XP in a single week.",
    category: "Speed",
    tier: "Common",
    points: 50,
    unlocked: false,
    iconName: "Zap",
  },
];

const timelineEvents = [
  { text: "Unlocked 'Laser' badge", time: "2 hours ago", icon: Sparkles, color: "text-violet-400" },
  { text: "Completed Streak Milestone", time: "Yesterday", icon: Award, color: "text-amber-400" },
  { text: "Joined Achievements Board", time: "3 days ago", icon: Trophy, color: "text-cyan-400" },
];

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [shared, setShared] = useState(false);

  const handleShare = () => {
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const filteredBadges = initialBadges.filter((badge) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Upcoming") return !badge.unlocked;
    return badge.category === selectedCategory;
  });

  const unlockedCount = initialBadges.filter((b) => b.unlocked).length;
  const completionRate = Math.round((unlockedCount / initialBadges.length) * 100);

  const getIcon = (name: string) => {
    switch (name) {
      case "Trophy":
        return <Trophy size={20} />;
      case "Zap":
        return <Zap size={20} />;
      case "Clock":
        return <Clock size={20} />;
      case "Award":
        return <Award size={20} />;
      case "Sparkles":
        default:
          return <Sparkles size={20} />;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Epic":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "Rare":
        return "bg-violet-500/10 text-violet-400 border-violet-500/20";
      default:
        return "bg-zinc-800 text-zinc-400 border-zinc-700/50";
    }
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <Sidebar />

      <main className="pb-28 pt-8 px-4 md:pl-24 lg:pl-26 md:pr-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Achievements
              </h1>
              <p className="text-xs text-zinc-500 font-medium mt-0.5">
                Earn badges, hit milestone targets, and unlock credentials.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-8">
            <div className="relative lg:col-span-2 rounded-3xl border border-zinc-800/80 bg-[#0c0c14] p-6 sm:p-7 grain-overlay flex flex-col justify-between hover:border-white/90 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Trophy size={28} className="animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Your Progress</h3>
                    <p className="text-xs text-zinc-500 font-medium mt-0.5">Keep learning to complete all badges</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Badges Earned</span>
                    <span className="text-base font-extrabold text-white mt-0.5 block">{unlockedCount} / {initialBadges.length}</span>
                  </div>
                  <div className="h-8 w-px bg-zinc-800/60" />
                  <div>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Completion</span>
                    <span className="text-base font-extrabold text-violet-400 mt-0.5 block">{completionRate}%</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-zinc-900/60 flex items-center justify-between">
                <p className="text-xs text-zinc-400 font-medium">
                  Next reward unlocks at <strong>5 badges</strong>.
                </p>
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-4 py-2 text-xs font-semibold text-zinc-350 hover:text-white transition-colors cursor-pointer"
                  >
                    <Share2 size={13} />
                    Share Stats
                  </motion.button>

                  <AnimatePresence>
                    {shared && (
                      <motion.span
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 bottom-12 whitespace-nowrap rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2.5 py-1.5 shadow-lg"
                      >
                        Stats link copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl border border-zinc-800/80 bg-[#0c0c14] p-6 sm:p-7 grain-overlay hover:border-white/90 transition-all duration-300">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-1.5">
                <Calendar size={14} />
                Timeline
              </h3>
              <div className="space-y-4">
                {timelineEvents.map((evt, idx) => {
                  const Icon = evt.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 h-6 w-6 rounded-lg bg-zinc-900 flex items-center justify-center ${evt.color}`}>
                        <Icon size={12} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white leading-none">{evt.text}</p>
                        <span className="text-[10px] text-zinc-500 font-semibold mt-1 block">{evt.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 select-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-bold border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white text-zinc-950 border-white"
                    : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredBadges.map((badge) => (
                <motion.div
                  layout
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`relative overflow-hidden rounded-3xl border bg-[#0c0c14] p-6 grain-overlay flex flex-col justify-between min-h-45 hover:border-white/90 transition-all duration-300 ${
                    badge.unlocked ? "border-zinc-800/80" : "border-zinc-900/50 opacity-60"
                  }`}
                >
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`h-11 w-11 rounded-xl flex items-center justify-center ${
                          badge.unlocked
                            ? "bg-violet-500/10 text-violet-400 border border-violet-500/20"
                            : "bg-zinc-900 text-zinc-600 border border-zinc-800"
                        }`}
                      >
                        {badge.unlocked ? getIcon(badge.iconName) : <Lock size={18} />}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                          {badge.title}
                        </h4>
                        <span className={`inline-block text-[9px] font-bold border rounded-md px-1.5 py-0.5 mt-1 ${getTierColor(badge.tier)}`}>
                          {badge.tier}
                        </span>
                      </div>
                    </div>

                    <span className="font-mono text-xs font-bold text-zinc-400 bg-zinc-900/80 border border-zinc-850 px-2.5 py-1 rounded-lg">
                      {badge.points} pts
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 font-medium leading-relaxed mt-4">
                    {badge.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-zinc-900/60 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      {badge.category}
                    </span>
                    <span className="text-[10px] font-bold flex items-center gap-1">
                      {badge.unlocked ? (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 size={12} />
                          Unlocked
                        </span>
                      ) : (
                        <span className="text-zinc-650 flex items-center gap-1">
                          <Lock size={10} />
                          Locked
                        </span>
                      )}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
