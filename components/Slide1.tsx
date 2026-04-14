'use client';

import { motion } from "framer-motion";

export default function Slide1() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#09080f] via-[#07070c] to-[#020204]" />
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-16 w-16 rounded-full border border-white/10 bg-white/5"
            style={{
              left: `${10 + index * 8}%`,
              top: `${12 + (index % 3) * 18}%`,
            }}
            animate={{ y: [0, -32, 0], opacity: [0.15, 0.55, 0.15] }}
            transition={{ duration: 8 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <div className="mb-8 inline-flex rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/50 backdrop-blur-xl">
          silence
        </div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.4 }}
          className="text-4xl font-semibold tracking-[0.03em] text-white sm:text-6xl"
        >
          I know… I messed up.
        </motion.h1>
        <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
          The quiet weight of regret is the start of something new.
        </p>
      </motion.div>
    </div>
  );
}
