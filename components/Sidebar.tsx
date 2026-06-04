"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BookOpen,
  Trophy,
  Activity,
  UserCircle,
  LogOut,
  GraduationCap,
  Menu,
  X,
  Lock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: BookOpen, label: "Courses", href: "/courses" },
  { icon: Trophy, label: "Achievements", href: "/achievements" },
  { icon: Activity, label: "Activity", href: "/activity" },
];

const secondaryItems = [
  { icon: UserCircle, label: "Profile", href: "/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      setIsLoggingOut(false);
      setShowLogoutModal(false);
      alert("Successfully logged out! (Mock session cleared)");
    }, 2000);
  };

  return (
    <>
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-20 flex-col items-center border-r border-zinc-800/60 bg-[#07070b]/95 backdrop-blur-md py-6 md:flex lg:w-22">
        <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/20">
          <GraduationCap size={26} className="text-white" />
        </div>

        <nav className="flex flex-1 flex-col items-center gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="relative flex h-12 w-12 items-center justify-center rounded-xl text-zinc-500 transition-colors duration-200 hover:text-white"
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 rounded-xl bg-white/10 border border-violet-500/20"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                        delay: 0,
                      }}
                    />
                  )}
                  <Icon
                    size={22}
                    className={`relative z-10 ${isActive ? "text-violet-400" : "text-zinc-500 group-hover:text-zinc-300"}`}
                  />
                </Link>

                <div className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-zinc-700/50 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100">
                  {item.label}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex flex-col items-center gap-2 pb-4">
          {secondaryItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="relative flex h-12 w-12 items-center justify-center rounded-xl text-zinc-500 transition-colors duration-200 hover:text-white"
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 rounded-xl bg-white/10 border border-violet-500/20"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  <Icon
                    size={22}
                    className={`relative z-10 ${isActive ? "text-violet-400" : "text-zinc-500 group-hover:text-zinc-300"}`}
                  />
                </Link>
                <div className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-zinc-700/50 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100">
                  {item.label}
                </div>
              </div>
            );
          })}

          <div className="my-1 h-px w-8 bg-zinc-800" />

          <div className="group relative">
            <button
              onClick={() => setShowLogoutModal(true)}
              className="flex h-12 w-12 items-center justify-center rounded-xl text-zinc-500 transition-colors duration-200 hover:text-red-400 cursor-pointer"
            >
              <LogOut size={22} />
            </button>
            <div className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-zinc-700/50 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100">
              Logout
            </div>
          </div>
        </div>
      </aside>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-zinc-800/60 bg-[#07070b]/95 backdrop-blur-xl px-2 py-2 md:hidden">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="relative flex flex-col items-center gap-1 rounded-xl px-3 py-2"
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-active"
                  className="absolute inset-0 rounded-xl bg-violet-500/10 border border-violet-500/20"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
              <Icon
                size={20}
                className={`relative z-10 ${isActive ? "text-violet-400" : "text-zinc-500"}`}
              />
              <span
                className={`relative z-10 text-[10px] font-medium ${isActive ? "text-violet-400" : "text-zinc-500"}`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-white md:hidden"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 mx-4 rounded-2xl border border-zinc-800 bg-[#07070b]/98 backdrop-blur-xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {secondaryItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                      isActive ? "bg-white/10 text-violet-400" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
              <div className="my-2 h-px bg-zinc-800" />
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setShowLogoutModal(true);
                }}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-zinc-400 hover:bg-red-500/10 hover:text-red-400 transition-colors text-left cursor-pointer"
              >
                <LogOut size={18} />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLogoutModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isLoggingOut && setShowLogoutModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-zinc-800 bg-[#0a0a10] p-6 text-center shadow-2xl shadow-violet-500/5 grain-overlay"
            >
              {isLoggingOut ? (
                <div className="py-6 flex flex-col items-center justify-center">
                  <div className="relative h-16 w-16 mb-4">
                    <div className="absolute inset-0 rounded-full border-4 border-violet-500/20" />
                    <div className="absolute inset-0 rounded-full border-4 border-t-violet-500 animate-spin" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Logging Out</h3>
                  <p className="mt-2 text-sm text-zinc-400">Safely closing your learning session...</p>
                </div>
              ) : (
                <>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
                    <LogOut size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Confirm Logout</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Are you sure you want to exit NexLearn? Your streak and current lesson progress are saved.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setShowLogoutModal(false)}
                      className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900/50 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex-1 rounded-xl bg-linear-to-r from-red-600 to-orange-600 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                    >
                      Yes, Logout
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}