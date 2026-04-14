'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const text = "And now… it’s eating me from inside.";

export default function Slide3() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let count = 0;
    const interval = window.setInterval(() => {
      setTyped(text.slice(0, count + 1));
      count += 1;
      if (count >= text.length) {
        window.clearInterval(interval);
      }
    }, 80);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(255,82,145,0.08),_transparent_18%)]" />
      <div className="absolute inset-0 bg-black/20" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center px-4"
      >
        <div className="mb-6 rounded-[40px] border border-white/10 bg-white/10 px-8 py-6 shadow-glow backdrop-blur-3xl">
          <p className="text-sm uppercase tracking-[0.36em] text-white/50">realization</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
            I didn’t mean to hurt you…
            <br />
            but I know I did.
          </h2>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-2xl font-semibold leading-tight text-white sm:text-4xl"
          >
            {typed}
            <span className="inline-block h-6 w-1 bg-white/80 align-middle animate-pulse ml-2" />
          </motion.div>
        </div>
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="mt-8 rounded-full bg-white/5 px-4 py-2 text-sm text-white/60"
        >
          <span className="text-pink-300">💔</span> My chest tightens with every heartbeat.
        </motion.div>
      </motion.div>
    </div>
  );
}
