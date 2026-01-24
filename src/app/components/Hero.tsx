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

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-60 left-24 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="text-base text-white/70 font-semibold">
            Senior Platform Reliability Engineer | DevOps | AIOps | GenAI | MLOps
          </p>

          <motion.h1
            className="mt-4 text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight flex flex-wrap gap-2 sm:gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={childVariants}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <p className="mt-8 text-base sm:text-lg leading-relaxed text-white/70 max-w-3xl">
            11+ years of enterprise experience delivering reliability-first operations, observability engineering, and 
            automation across critical systems. Passionate about GenAI, MLOps, and building AI-powered incident intelligence.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#portfolio"
              className="rounded-lg bg-white px-5 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-black hover:bg-white/90 transition-colors"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/30 px-5 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold hover:border-white/60 transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
