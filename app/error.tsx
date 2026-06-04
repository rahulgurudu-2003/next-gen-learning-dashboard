"use client";

import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="max-w-md rounded-2xl border border-red-500/20 bg-[#0b0b12] p-8 text-center"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10">
          <AlertTriangle size={28} className="text-red-400" />
        </div>

        <h1 className="text-2xl font-bold text-white">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm text-zinc-400">
          {error.message || "We couldn't load the dashboard. This might be a temporary issue with the database connection."}
        </p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={reset}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-medium text-white"
        >
          <RefreshCw size={16} />
          Try Again
        </motion.button>
      </motion.div>
    </div>
  );
}