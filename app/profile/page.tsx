"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  GraduationCap,
  FileText,
  UploadCloud,
  CheckCircle,
  Eye,
  Camera,
  Save,
  Edit2,
  FileSpreadsheet,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showAtsModal, setShowAtsModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle");
  const [saveToast, setSaveToast] = useState(false);

  const [profileData, setProfileData] = useState({
    studentName: "Alex Mercer",
    studentId: "STU10294",
    batchNo: "FS-09",
    emailId: "alex.mercer@example.com",
    dob: "2002-05-15",
    age: "24",
    gender: "Male",
    bloodGroup: "O+",
    city: "San Francisco",
    state: "California",
    phone: "+15550192834",
    parentPhone: "+15550195821",
    githubLink: "https://github.com/alexmercer",
    collegeName: "Tech Institute of Science & Technology",
    usnNumber: "20T11A0410",
    qualification: "UG (Bachelor of Technology)",
    department: "Computer Science and Engineering",
    passoutYear: "2025",
    percentage: "81%",
    arrears: "No",
    arrearsCount: "0",
    tenthPassYear: "2019",
    tenthPercentage: "91%",
    twelfthPassYear: "2021",
    twelfthPercentage: "94%",
    skills: "JavaScript, TypeScript, React, Next.js, Node.js, Python, CSS, TailwindCSS, SQL",
  });

  const handleInputChange = (field: keyof typeof profileData, val: string) => {
    setProfileData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSave = () => {
    setIsEditing(false);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const handleUploadResume = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setUploadStatus("idle");
    setTimeout(() => {
      setIsUploading(false);
      setUploadStatus("success");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <Sidebar />

      <main className="pb-28 pt-8 px-4 md:pl-24 lg:pl-26 md:pr-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Student Profile
              </h1>
              <p className="text-xs text-zinc-500 font-medium mt-0.5">
                Manage your credentials, academic scores, and recruiter resources.
              </p>
            </div>
            <div>
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-violet-500 transition-colors cursor-pointer"
                >
                  <Save size={14} />
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-5 py-2.5 text-xs font-bold text-zinc-350 hover:text-white transition-colors cursor-pointer"
                >
                  <Edit2 size={14} />
                  Edit Profile
                </button>
              )}
            </div>
          </header>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-[#0c0c14] p-6 sm:p-8 grain-overlay flex flex-col sm:flex-row items-center gap-6 hover:border-white/90 transition-all duration-300">
              <div className="relative">
                <div className="h-24 w-24 rounded-full border border-zinc-800 bg-zinc-900 overflow-hidden flex items-center justify-center">
                  <span className="text-3xl font-extrabold text-zinc-550">AM</span>
                </div>
                <div className="absolute bottom-0 right-0 h-7 w-7 rounded-full bg-violet-600 border border-[#0c0c14] flex items-center justify-center text-white cursor-pointer hover:bg-violet-500 transition-colors">
                  <Camera size={12} />
                </div>
              </div>

              <div className="text-center sm:text-left min-w-0">
                <h2 className="text-2xl font-extrabold text-white tracking-tight">{profileData.studentName}</h2>
                <p className="text-xs font-mono text-zinc-500 mt-1">ID: {profileData.studentId} • Batch: {profileData.batchNo}</p>
                <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                  <span className="rounded-full bg-violet-500/10 border border-violet-500/20 px-3 py-0.5 text-[10px] font-bold text-violet-400">
                    B.Tech CSE
                  </span>
                  <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-0.5 text-[10px] font-bold text-cyan-400">
                    Passout 2025
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="relative rounded-3xl border border-zinc-800/80 bg-[#0c0c14] p-6 sm:p-7 grain-overlay hover:border-white/90 transition-all duration-300">
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-6 flex items-center gap-2">
                  <User size={16} />
                  Personal Information
                </h3>
                <div className="space-y-4">
                  {Object.entries({
                    studentName: "Student Name",
                    studentId: "Student ID",
                    batchNo: "Batch No",
                    emailId: "Email ID",
                    dob: "Date of Birth",
                    age: "Age",
                    gender: "Gender",
                    bloodGroup: "Blood Group",
                    city: "City",
                    state: "State",
                    phone: "Phone Number",
                    parentPhone: "Parent Phone",
                    githubLink: "Github Link",
                  }).map(([key, label]) => (
                    <div key={key} className="grid grid-cols-3 gap-4 text-xs">
                      <span className="text-zinc-500 font-semibold">{label}</span>
                      <span className="col-span-2 text-white font-bold break-all">
                        {isEditing ? (
                          <input
                            type="text"
                            value={profileData[key as keyof typeof profileData]}
                            onChange={(e) => handleInputChange(key as keyof typeof profileData, e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-850 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-violet-500"
                          />
                        ) : (
                          profileData[key as keyof typeof profileData]
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-3xl border border-zinc-800/80 bg-[#0c0c14] p-6 sm:p-7 grain-overlay hover:border-white/90 transition-all duration-300">
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-6 flex items-center gap-2">
                  <GraduationCap size={18} />
                  Academic Information
                </h3>
                <div className="space-y-4">
                  {Object.entries({
                    collegeName: "College Name",
                    usnNumber: "USN Number",
                    qualification: "Qualification",
                    department: "Department",
                    passoutYear: "Pass out Year",
                    percentage: "Graduation %",
                    arrears: "Arrears",
                    arrearsCount: "No of Arrears",
                    tenthPassYear: "10th Pass Year",
                    tenthPercentage: "10th Percentage",
                    twelfthPassYear: "12th Pass Year",
                    twelfthPercentage: "12th Percentage",
                    skills: "Skills",
                  }).map(([key, label]) => (
                    <div key={key} className="grid grid-cols-3 gap-4 text-xs">
                      <span className="text-zinc-500 font-semibold">{label}</span>
                      <span className="col-span-2 text-white font-bold leading-relaxed">
                        {isEditing ? (
                          <input
                            type="text"
                            value={profileData[key as keyof typeof profileData]}
                            onChange={(e) => handleInputChange(key as keyof typeof profileData, e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-850 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-violet-500"
                          />
                        ) : (
                          profileData[key as keyof typeof profileData]
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative rounded-3xl border border-zinc-800/80 bg-[#0c0c14] p-6 grain-overlay hover:border-white/90 transition-all duration-300 flex flex-col justify-between min-h-40">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
                    <UploadCloud size={14} />
                    Upload Resume
                  </h4>
                  <p className="text-[11px] text-zinc-450 leading-relaxed">
                    Upload your latest CV in PDF format to refresh metrics.
                  </p>
                </div>

                <form onSubmit={handleUploadResume} className="mt-4 flex gap-2">
                  <input
                    type="file"
                    accept=".pdf"
                    required
                    className="block w-full text-[10px] text-zinc-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[10px] file:font-semibold file:bg-zinc-900 file:text-zinc-350 hover:file:bg-zinc-800 cursor-pointer"
                  />
                  <button
                    type="submit"
                    disabled={isUploading}
                    className="rounded-xl bg-violet-600 px-4 py-2 text-[11px] font-bold text-white hover:bg-violet-500 transition-colors disabled:opacity-50 cursor-pointer shrink-0"
                  >
                    {isUploading ? "Uploading..." : "Upload"}
                  </button>
                </form>

                {uploadStatus === "success" && (
                  <p className="text-[10px] text-emerald-400 font-semibold mt-2 flex items-center gap-1">
                    <CheckCircle size={10} /> Resume uploaded!
                  </p>
                )}
              </div>

              <div className="relative rounded-3xl border border-zinc-800/80 bg-[#0c0c14] p-6 grain-overlay hover:border-white/90 transition-all duration-300 flex flex-col justify-between min-h-40">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
                    <FileText size={14} />
                    Resume Portfolio
                  </h4>
                  <p className="text-[11px] text-zinc-450 leading-relaxed">
                    Review ATS score metrics and structural layouts.
                  </p>
                </div>

                <div className="mt-4 flex gap-2.5">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-850 bg-zinc-950 hover:border-zinc-700 px-4 py-2 text-[11px] font-bold text-zinc-350 hover:text-white transition-colors cursor-pointer w-full text-center"
                  >
                    <Eye size={12} />
                    View
                  </a>
                  <button
                    onClick={() => setShowAtsModal(true)}
                    className="rounded-xl bg-violet-600 px-4 py-2 text-[11px] font-bold text-white hover:bg-violet-500 transition-colors cursor-pointer w-full"
                  >
                    ATS Score
                  </button>
                </div>
              </div>

              <div className="relative rounded-3xl border border-zinc-800/80 bg-linear-to-br from-violet-900/60 to-cyan-900/60 p-6 grain-overlay hover:border-white/90 transition-all duration-300 flex items-center justify-between min-h-40 shadow-lg shadow-violet-500/5">
                <div className="space-y-1.5">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-violet-200">
                    Current Score
                  </h4>
                  <p className="text-3xl font-black text-white tracking-tight">
                    82.5/100
                  </p>
                  <p className="text-[10px] font-semibold text-cyan-200">
                    Top 5% of active cohort
                  </p>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/20">
                  <FileSpreadsheet size={28} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {showAtsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md rounded-3xl border border-zinc-800 bg-[#0c0c14] p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-extrabold text-white">ATS Resume Insights</h3>
                <span className="text-[10px] font-mono text-zinc-550">Scan date: Today</span>
              </div>

              <div className="space-y-4 mt-2">
                {[
                  { label: "Keyword Matching", val: 86 },
                  { label: "Formatting & Layout", val: 92 },
                  { label: "Impact & Achievements", val: 80 },
                  { label: "Core Skills Match", val: 84 },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-zinc-400">
                      <span>{item.label}</span>
                      <span className="text-white font-mono">{item.val}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-850">
                      <div className="h-full bg-violet-500 rounded-full" style={{ width: `${item.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-zinc-900 pt-4 flex justify-between items-center">
                <div>
                  <span className="text-[9px] uppercase font-extrabold text-zinc-500 tracking-wider">Overall Score</span>
                  <p className="text-2xl font-black text-white mt-0.5">85/100</p>
                </div>
                <button
                  onClick={() => setShowAtsModal(false)}
                  className="rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-4 py-2 text-xs font-bold text-zinc-350 hover:text-white transition-colors cursor-pointer"
                >
                  Close Insights
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {saveToast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 right-6 z-50 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold px-4 py-3 shadow-lg flex items-center gap-2"
          >
            <CheckCircle size={14} />
            Profile updated successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
