'use client';

import { motion } from "framer-motion";

interface Slide6Props {
  onConfirm: () => void;
  messageShown: boolean;
}

export default function Slide6({ onConfirm, messageShown }: Slide6Props) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden px-4 py-8 sm:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(156,107,255,0.16),_transparent_16%),radial-gradient(circle_at_bottom_right,_rgba(255,119,168,0.14),_transparent_18%)]" />
      <div className="pointer-events-none absolute inset-0 bg-black/18" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-10 flex w-full max-w-[560px] flex-col items-center gap-4 text-center"
      >
        <p className="text-xs uppercase tracking-[0.45em] text-white/50">hope</p>
        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Can we fix this… together?
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        className="relative z-10 flex w-full max-w-[520px] flex-1 items-center justify-center"
      >
        <motion.img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGk2aG96bXZwemlmOWxpd3NtdWdpeDZpMnZnNjNpcGRuOWdlejdtaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PNSnRQAXhIIMB1Se7R/giphy.gif"
          alt="Can we fix this together"
          className="mx-auto h-[44vh] max-h-[60vh] w-full rounded-[32px] object-contain shadow-2xl shadow-black/40"
          animate={{ scale: [0.99, 1.01, 0.99] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="relative z-10 flex w-full max-w-[560px] flex-col items-center gap-4 text-center">
        <motion.button
          type="button"
          onClick={onConfirm}
          whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(255,255,255,0.18)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-glow backdrop-blur-xl transition duration-300"
        >
          Yes ❤️
        </motion.button>

        {messageShown && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full max-w-xl rounded-[32px] border border-white/10 bg-white/5 px-8 py-6 text-left text-white/80 shadow-glow backdrop-blur-xl"
          >
            <p className="text-lg font-medium text-white sm:text-xl">Thank you for giving us another chance.</p>
            <p className="mt-3 text-sm leading-7 text-white/70">I’ll do better. I promise.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
