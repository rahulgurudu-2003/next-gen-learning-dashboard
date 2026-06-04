"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  UserCheck,
  ChevronRight,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";

const navTabs = ["Mark Attendance", "Class Attendance", "Practice Attendance"];

const subjects = [
  "Python",
  "Flask",
  "Frontend",
  "MySQL",
  "SoftSkills",
  "Aptitude",
  "DSA-Python",
];

export default function ActivityPage() {
  const [activeTab, setActiveTab] = useState("Mark Attendance");
  const [selectedSubject, setSelectedSubject] = useState("Python");
  const [attendanceType, setAttendanceType] = useState("Class");
  const [otp, setOtp] = useState("");
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "none";
    text: string;
  }>({
    type: "none",
    text: "",
  });

  const handleMarkAttendance = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setStatusMessage({
        type: "error",
        text: "Please enter a valid 6-digit OTP code.",
      });
      return;
    }

    if (otp === "123456") {
      setStatusMessage({
        type: "success",
        text: `Attendance marked successfully for ${selectedSubject} (${attendanceType})!`,
      });
      setOtp("");
    } else {
      setStatusMessage({
        type: "error",
        text: `Invalid OTP code. No session matching '${otp}' found for ${selectedSubject}.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <Sidebar />

      <main className="pb-28 pt-8 px-4 md:pl-24 lg:pl-26 md:pr-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Activity & Attendance
              </h1>
              <p className="text-xs text-zinc-500 font-medium mt-0.5">
                Verify session attendance and track classroom checkpoints.
              </p>
            </div>
          </header>

          <div className="flex border-b border-zinc-900 mb-8 overflow-x-auto scrollbar-none">
            <div className="flex gap-2 pb-px">
              {navTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setStatusMessage({ type: "none", text: "" });
                  }}
                  className={`relative px-4 py-3 text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === tab ? "text-white" : "text-zinc-500 hover:text-zinc-350"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-500"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "Mark Attendance" ? (
              <motion.div
                key="mark-attendance"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">
                    Subjects
                  </h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {subjects.map((sub) => {
                      const isSelected = selectedSubject === sub;
                      return (
                        <button
                          key={sub}
                          onClick={() => {
                            setSelectedSubject(sub);
                            setStatusMessage({ type: "none", text: "" });
                          }}
                          className={`relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? "bg-violet-950/10 border-violet-500/60 shadow-lg shadow-violet-500/5 text-white"
                              : "bg-[#0c0c14] border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-bold truncate">{sub}</span>
                            {isSelected && (
                              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="relative rounded-3xl border border-zinc-800/80 bg-[#0c0c14] p-6 sm:p-8 grain-overlay hover:border-white/90 transition-all duration-300 max-w-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <UserCheck size={20} />
                    </div>
                    <h3 className="text-base font-extrabold text-white">
                      {selectedSubject} Class Attendance
                    </h3>
                  </div>

                  <div className="inline-flex rounded-xl bg-zinc-950 p-1 border border-zinc-900 mb-6 select-none">
                    <button
                      onClick={() => setAttendanceType("Class")}
                      className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                        attendanceType === "Class"
                          ? "bg-violet-600 text-white"
                          : "text-zinc-500 hover:text-zinc-350"
                      }`}
                    >
                      Class
                    </button>
                    <button
                      onClick={() => setAttendanceType("Practice")}
                      className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                        attendanceType === "Practice"
                          ? "bg-violet-600 text-white"
                          : "text-zinc-500 hover:text-zinc-350"
                      }`}
                    >
                      Practice
                    </button>
                  </div>

                  <form onSubmit={handleMarkAttendance} className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                        Enter Active OTP
                      </label>
                      <p className="text-xs text-zinc-450 mb-3 leading-relaxed">
                        Enter the 6-digit active OTP shown by your instructor or session host to register your attendance. (Try <strong>123456</strong> for a demo success state).
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="text"
                          maxLength={6}
                          value={otp}
                          onChange={(e) =>
                            setOtp(e.target.value.replace(/\D/g, ""))
                          }
                          placeholder="Enter 6-digit OTP"
                          className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm font-bold text-white placeholder-zinc-650 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 max-w-xs transition-colors"
                        />
                        <button
                          type="submit"
                          className="rounded-xl bg-linear-to-r from-violet-600 to-cyan-600 px-6 py-3 text-xs font-bold text-white hover:opacity-95 transition-opacity cursor-pointer whitespace-nowrap"
                        >
                          Mark Attendance
                        </button>
                      </div>
                    </div>
                  </form>

                  <AnimatePresence mode="wait">
                    {statusMessage.type !== "none" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`mt-6 rounded-xl border p-4 flex items-start gap-3 ${
                          statusMessage.type === "success"
                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                            : "bg-amber-500/10 border-amber-500/20 text-amber-400"
                        }`}
                      >
                        {statusMessage.type === "success" ? (
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                        ) : (
                          <AlertTriangle size={16} className="mt-0.5 shrink-0" />
                        )}
                        <p className="text-xs font-semibold leading-relaxed">
                          {statusMessage.text}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="other-attendance"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="relative rounded-3xl border border-zinc-800/80 bg-[#0c0c14] p-8 grain-overlay text-center"
              >
                <BookOpen className="text-zinc-650 mx-auto mb-3" size={32} />
                <h3 className="text-base font-bold text-white">No entries found</h3>
                <p className="text-xs text-zinc-550 mt-1 max-w-sm mx-auto leading-relaxed">
                  Historical stats for {activeTab} will populate here once you register active classroom OTP checkpoints.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
