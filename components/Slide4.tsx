'use client';

import { motion } from "framer-motion";

export default function Slide4() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(156,107,255,0.12),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(86,210,255,0.1),_transparent_20%)]" />
      <div className="absolute inset-0 bg-black/20" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center px-4"
      >
        <div className="mb-10 rounded-[40px] border border-white/10 bg-white/10 px-8 py-10 shadow-glow backdrop-blur-3xl">
          <p className="text-sm uppercase tracking-[0.36em] text-white/50">reflection</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Every heartbeat remembers the good we once shared.
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="rounded-[36px] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-3xl"
        >
          <p className="text-lg leading-8 text-white/80 sm:text-xl">
            I keep replaying those soft moments, hoping I can make them brighter again.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
