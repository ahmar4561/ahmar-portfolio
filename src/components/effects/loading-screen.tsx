"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050508]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#050508] text-2xl font-bold text-white">
                AM
              </div>
            </div>
            <motion.div
              className="absolute -inset-4 rounded-3xl border border-violet-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <motion.p
            className="text-sm font-medium tracking-[0.3em] text-white/60 uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Ahmar Ali Memon
          </motion.p>

          <motion.div
            className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
