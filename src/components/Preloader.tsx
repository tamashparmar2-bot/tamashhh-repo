import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Simulate progress loading
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Staggered speed for a natural feel
      const increment = Math.floor(Math.random() * 8) + 2; 
      current = Math.min(current + increment, 100);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        // Let user see 100% for a brief moment before fading out
        setTimeout(() => {
          setIsDone(true);
        }, 500);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const brandText = "YASHFX";

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -30,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-white dark:bg-navy-950 flex flex-col items-center justify-center select-none"
        >
          {/* Subtle background blue glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="w-full max-w-[280px] sm:max-w-[340px] flex flex-col items-center gap-6 relative">
            {/* Monospaced large background counter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.06 }}
              className="absolute -top-16 font-mono text-[12vw] font-bold text-slate-900 dark:text-white tracking-tighter pointer-events-none"
            >
              {progress.toString().padStart(3, "0")}
            </motion.div>

            {/* Animated Brand Logo */}
            <motion.img
              src="/logo.png"
              alt="YASHFX"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl shadow-xl shadow-blue-500/20 object-contain"
            />

            {/* Brand text with staggered letter fade-in */}
            <div className="flex overflow-hidden">
              {brandText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="font-podium text-3xl sm:text-4xl lg:text-5xl font-bold tracking-widest text-slate-900 dark:text-white"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Minimalist Blue Progress bar */}
            <div className="w-full h-[2px] bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative mt-1">
              <motion.div
                className="absolute top-0 left-0 h-full bg-blue-600"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Loading text with percentage */}
            <div className="w-full flex items-center justify-between mt-1 text-[11px] font-mono tracking-widest uppercase text-slate-400">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Loading System
              </motion.span>
              <span className="text-blue-600 font-bold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
