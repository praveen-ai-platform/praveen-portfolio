"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const words = ["Observability", "•", "AIOps", "•", "GenAI", "•", "MLOps"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-60 left-24 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-cyan-400 font-bold"
          >
            Praveen
          </motion.p>

          <motion.h1
            className="mt-3 text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight flex flex-wrap gap-2 sm:gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 12,
                  stiffness: 180,
                  delay: index * 0.12,
                }}
                className={word === "•" ? "text-cyan-400/40" : "bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent"}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-5 text-base sm:text-lg leading-relaxed text-white/75 max-w-3xl font-medium"
          >
            11+ years of enterprise experience delivering reliability-first operations, observability engineering, and 
            automation across critical systems. Passionate about GenAI, MLOps, and building AI-powered incident intelligence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3 sm:gap-4"
          >
            <a
              href="#portfolio"
              className="group relative px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#contact"
              className="group relative px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold border-2 border-cyan-400/50 text-cyan-300 rounded-lg overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Connect
                <span className="group-hover:translate-x-1 transition-transform duration-300">✦</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-white/50 uppercase tracking-widest">Scroll</p>
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
