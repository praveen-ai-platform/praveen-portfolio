const projects = [
  {
    icon: "🤖",
    title: "Incident Assistant",
    desc: "GenAI-powered assistant that retrieves relevant runbook and incident knowledge, providing grounded troubleshooting suggestions for faster incident triage and response.",
    impact: "Reduced incident triage time by 75% (30 min → 7.5 min) | Improved first-response accuracy by 85%",
    tech: ["GenAI", "LLMs", "Vector Search", "Python"],
    link: "https://github.com/praveen-ai-platform/mlops-genai-portfolio/tree/main/rag-incident-assistant",
  },
  {
    icon: "🔒",
    title: "PII Detection | Remediation Pipeline",
    desc: "Privacy-aware log processing pipeline that detects PII entities using cloud-native services and masks/remediates sensitive values before sending to observability platforms.",
    impact: "Processed 500K+ logs daily with zero data breaches | Achieved 99.2% PII detection accuracy",
    tech: ["Cloud Comprehend", "Lambda", "Python", "Data Privacy", "Cloud Security"],
    link: "https://github.com/praveen-ai-platform/mlops-genai-portfolio/tree/main/pii-comprehend-remediation-pipeline",
  },
  {
    icon: "📊",
    title: "AIOps Alert Noise Reduction",
    desc: "ML-driven system for anomaly detection and alert correlation. Reduces duplicate and repetitive alerts through intelligent clustering and signal correlation patterns.",
    impact: "Reduced alert volume by 80% (500 alerts/day → 50) | Improved MTTR by 45% | Saved ops team 20+ hours/week",
    tech: ["Python", "ML", "Sumo Logic", "Alerting", "AIOps"],
    link: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Featured Projects</h2>
        <p className="text-base text-white/70">
          Production-ready projects demonstrating <span className="text-cyan-400 font-semibold">observability, AIOps, and GenAI | MLOps</span> capabilities with measurable impact.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((p, idx) => (
          <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="group block transform transition-transform duration-300 hover:-translate-y-1">
            <div className="rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-black to-blue-500/5 p-6 hover:border-cyan-500/60 hover:from-cyan-500/15 hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/20 group-hover:to-blue-500/10 transition-all duration-300"></div>
              <div className="relative flex gap-5">
                <span className="text-5xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">{p.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-blue-300 transition-all duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-300">{p.desc}</p>

                  <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/5 border border-cyan-500/30 group-hover:border-cyan-500/60 group-hover:from-cyan-500/20 group-hover:to-blue-500/15 transition-all duration-300">
                    <p className="text-xs font-bold bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">✨ IMPACT</p>
                    <p className="text-sm text-cyan-100 mt-1.5 group-hover:text-white transition-colors duration-300 font-medium leading-relaxed">{p.impact}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 hover:border-cyan-500/80 hover:from-cyan-500/40 hover:to-blue-500/25 hover:text-cyan-100 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-cyan-300 mt-3 inline-flex items-center gap-1.5 group-hover:text-cyan-200 transition-colors duration-300 font-bold text-sm">
                    Explore Details
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
