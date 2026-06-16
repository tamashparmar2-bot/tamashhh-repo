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
        }, 600);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const brandText = "TAMASHHH";

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -40,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0f] flex flex-col items-center justify-center select-none"
        >
          {/* Subtle background glow */}
          <div className="absolute w-[350px] h-[350px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

          <div className="w-full max-w-[280px] sm:max-w-[360px] flex flex-col items-center gap-6 relative">
            {/* Monospaced counter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.15 }}
              className="absolute -top-16 font-mono text-[10vw] font-bold text-white tracking-tighter"
            >
              {progress.toString().padStart(3, "0")}
            </motion.div>

            {/* Brand text with staggered letter fade-in */}
            <div className="flex overflow-hidden">
              {brandText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="font-podium text-3xl sm:text-4xl lg:text-5xl font-bold tracking-widest text-white"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Thin Minimalist Progress bar container */}
            <div className="w-full h-[1px] bg-white/5 rounded-full overflow-hidden relative mt-2">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Loading text with percentage */}
            <div className="w-full flex items-center justify-between mt-1 text-[10px] font-mono tracking-widest uppercase text-white/30">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                System Loading
              </motion.span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
