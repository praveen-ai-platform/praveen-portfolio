"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      icon: "📅",
      number: "11+",
      label: "Years in Production Systems",
      description: "Enterprise reliability & automation",
    },
    {
      icon: "🛠️",
      number: "5+",
      label: "Enterprise Platforms",
      description: "Sumo Logic, Splunk, Grafana, Dynatrace, Glassbox",
    },
    {
      icon: "🚀",
      number: "3",
      label: "Major Implementations",
      description: "End-to-end production systems",
    },
    {
      icon: "⚡",
      number: "100+",
      label: "Automation Rules",
      description: "Jenkins pipelines & Terraform modules",
    },
    {
      icon: "📊",
      number: "500K+",
      label: "Logs Daily",
      description: "Processing with PII detection",
    },
    {
      icon: "🤖",
      number: "20+",
      label: "AI/ML Innovations",
      description: "Anomaly detection & GenAI workflows",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Scale & Real-World Impact
        </h2>
        <p className="text-white/70 text-sm">Proven expertise across observability, automation, and AI-driven operations</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group p-5 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-black to-blue-500/5 hover:border-cyan-500/50 hover:from-cyan-500/15 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{stat.icon}</span>
              <div className="flex-1">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-cyan-300 mt-1">{stat.label}</div>
                <div className="text-xs text-white/60 mt-1.5 leading-tight">{stat.description}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
