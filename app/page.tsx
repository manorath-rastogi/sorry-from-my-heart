'use client';

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type ComponentType, type MouseEvent } from "react";
import confetti from "canvas-confetti";
import Slide1 from "../components/Slide1";
import Slide2 from "../components/Slide2";
import Slide3 from "../components/Slide3";
import Slide4 from "../components/Slide4";
import Slide5 from "../components/Slide5";
import Slide6 from "../components/Slide6";

const slides: ComponentType<any>[] = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];
const ctaOptions = ["Keep going ❤️", "Hear me out...", "Just one more thing 💭"];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [celebrated, setCelebrated] = useState(false);
  const [messageShown, setMessageShown] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const clickAllowed = !loading && index < slides.length - 1;
  const isFinal = index === slides.length - 1;

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const particleData = useMemo(
    () =>
      Array.from({ length: 22 }, (_, idx) => ({
        id: `particle-${idx}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 6 + Math.random() * 16,
        delay: `${Math.random() * 2}s`,
        duration: `${3 + Math.random() * 2}s`,
        opacity: 0.08 + Math.random() * 0.15,
      })),
    []
  );

  const CurrentSlide = slides[index];

  const handleTap = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const nextId = Date.now();
    setRipples((prev) => [...prev, { id: nextId, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== nextId)), 700);

    if (!clickAllowed) return;
    setIndex((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const handleConfetti = () => {
    if (celebrated) return;
    confetti({ particleCount: 110, spread: 80, origin: { y: 0.6 } });
    setCelebrated(true);
    setMessageShown(true);
  };

  const handleFooterClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isFinal) {
      handleConfetti();
      return;
    }
    setIndex((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const ctaText = isFinal ? "Yes ❤️" : ctaOptions[index % ctaOptions.length];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/music/preview/mixkit-emotional-piano-643.mp3"
        loop
        autoPlay
        muted={isMuted}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(156,107,255,0.24),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(86,210,255,0.18),_transparent_20%),linear-gradient(180deg,_#080812_0%,_#07080f_35%,_#0b0b17_100%)] bg-cover bg-center animate-background-shift" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08),_transparent_18%)] opacity-40" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particleData.map((particle) => (
          <span
            key={particle.id}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              opacity: particle.opacity,
            }}
            className="absolute rounded-full bg-white/10 blur-sm animate-drift"
          />
        ))}
      </div>

      <div className="absolute right-4 top-4 z-30 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm shadow-glow backdrop-blur-xl">
        <button
          type="button"
          onClick={() => setIsMuted((prev) => !prev)}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:scale-105 hover:bg-white/10"
        >
          {isMuted ? "🔇" : "🎵"}
        </button>
        <span>{isMuted ? "Muted" : "Low volume"}</span>
      </div>

      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-40 flex items-center justify-center bg-[#050507]/95"
        >
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="h-20 w-20 animate-spin rounded-full border-4 border-white/10 border-t-white/60" />
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">Softly loading</p>
          </div>
        </motion.div>
      )}

      <div className="relative z-20 h-screen px-5 sm:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <div
              className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden"
            >
              <CurrentSlide
                isFinal={isFinal}
                onConfirm={handleConfetti}
                messageShown={messageShown}
                onNext={() => setIndex((prev) => Math.min(prev + 1, slides.length - 1))}
              />

              <div className="pointer-events-none absolute inset-0 z-10" />

              <div className="pointer-events-none absolute inset-0 z-10">
                {ripples.map((ripple) => (
                  <span
                    key={ripple.id}
                    style={{ left: ripple.x, top: ripple.y }}
                    className="absolute h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/5 opacity-0 animate-ripple"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {!loading && index !== 1 && index !== 4 && index !== 5 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-30 flex justify-center px-4">
          <button
            type="button"
            onClick={handleFooterClick}
            className="pointer-events-auto rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-glow transition duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/15 hover:shadow-[0_0_32px_rgba(236,72,153,0.35)]"
          >
            {ctaText}
          </button>
        </div>
      )}

      <style>{`
        @keyframes ripple {
          0% { transform: scale(0.1); opacity: 0.35; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes drift {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
          100% { transform: translateY(0px) scale(1); }
        }
        @keyframes backgroundShift {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .animate-ripple {
          animation: ripple 0.7s ease-out forwards;
        }
        .animate-drift {
          animation: drift var(--duration, 4s) ease-in-out infinite;
        }
        .animate-background-shift {
          background-size: 200% 200%;
          animation: backgroundShift 18s ease infinite;
        }
      `}</style>
    </main>
  );
}
