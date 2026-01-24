const projects = [
  {
    icon: "🤖",
    title: "Incident Assistant (FastAPI)",
    desc: "GenAI-powered assistant that retrieves relevant runbook and incident knowledge, providing grounded troubleshooting suggestions for faster incident triage and response.",
    impact: "Reduced incident triage time by 75% (30 min → 7.5 min) | Improved first-response accuracy by 85%",
    tech: ["FastAPI", "GenAI", "LLMs", "Vector Search", "Python"],
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
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
      <p className="text-white/60 mb-12">
        Production-ready projects demonstrating observability, AIOps, and GenAI | MLOps capabilities with measurable impact.
      </p>

      <div className="space-y-6">
        {projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="rounded-lg border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-7 hover:border-white/30 hover:from-white/10 transition-all">
              <div className="flex gap-4">
                <span className="text-4xl">{p.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-white/70">{p.desc}</p>

                  <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-sm font-semibold text-green-400">✨ Impact:</p>
                    <p className="text-sm text-white/70 mt-1">{p.impact}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 hover:border-white/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-white/60 mt-4 inline-block group-hover:text-white transition-colors">
                    View Project →
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
