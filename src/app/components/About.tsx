export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</h2>

      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group">
            <h3 className="text-lg font-bold mb-4 text-cyan-300">Professional Summary</h3>
            <div className="space-y-3 text-white/80 leading-relaxed text-base">
              <p>
                Senior Platform Reliability Engineer with 11+ years of enterprise IT experience 
                specializing in production reliability, observability engineering, incident triage, 
                and infrastructure automation.
              </p>
              <p>
                Strong expertise in building actionable dashboards and alerts using Sumo Logic, Splunk, 
                Grafana/Prometheus, Dynatrace, and Glassbox. Experienced in AWS monitoring (EKS, Lambda, 
                Batch, EC2, S3) and Terraform-based automation (IaC).
              </p>
              <p>
                Hands-on with AIOps patterns: anomaly detection, signal correlation, alert noise reduction, 
                and guided troubleshooting. Additionally, experienced in GenAI (RAG workflows) and MLOps 
                practices including AWS SageMaker deployment and PII remediation.
              </p>
            </div>
          </div>

          <div className="group">
            <h3 className="text-lg font-bold mb-4 text-cyan-300">What Sets Me Apart</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-4 p-4 rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 hover:border-cyan-500/40 hover:from-cyan-500/10 transition-all duration-300">
                <span className="text-cyan-400 text-xl font-bold flex-shrink-0">→</span>
                <span><strong className="text-cyan-300">High-ownership individual contributor</strong> with end-to-end execution across monitoring design, automation, troubleshooting, and enablement.</span>
              </li>
              <li className="flex gap-4 p-4 rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 hover:border-cyan-500/40 hover:from-cyan-500/10 transition-all duration-300">
                <span className="text-cyan-400 text-xl font-bold flex-shrink-0">→</span>
                <span><strong className="text-cyan-300">Rapid self-learner</strong> who independently adopted enterprise solutions across multiple observability platforms and infrastructure tools.</span>
              </li>
              <li className="flex gap-4 p-4 rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 hover:border-cyan-500/40 hover:from-cyan-500/10 transition-all duration-300">
                <span className="text-cyan-400 text-xl font-bold flex-shrink-0">→</span>
                <span><strong className="text-cyan-300">Proactive mindset</strong> focused on early detection, actionable alerting, and operational excellence to reduce repeat incidents and improve reliability.</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-8 text-cyan-400">Core Strengths</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 hover:border-cyan-500/40 transition-all duration-300">
              <h4 className="text-white font-bold mb-4 text-lg flex items-center gap-2"><span className="text-cyan-400">🏗️</span> Platform & Operations</h4>
              <ul className="text-white/70 space-y-3 text-sm leading-relaxed">
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> Incident triage & Root Cause Analysis (RCA)</li>
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> Proactive monitoring & MTTR reduction</li>
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> Observability architecture & strategy</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 hover:border-cyan-500/40 transition-all duration-300">
              <h4 className="text-white font-bold mb-4 text-lg flex items-center gap-2"><span className="text-cyan-400">📊</span> Observability Engineering</h4>
              <ul className="text-white/70 space-y-3 text-sm leading-relaxed">
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> Dashboard design across logs & metrics</li>
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> Alert engineering & noise reduction</li>
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> Correlation-driven triage</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 hover:border-cyan-500/40 transition-all duration-300">
              <h4 className="text-white font-bold mb-4 text-lg flex items-center gap-2"><span className="text-cyan-400">⚙️</span> AIOps & Automation</h4>
              <ul className="text-white/70 space-y-3 text-sm leading-relaxed">
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> Anomaly detection patterns</li>
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> Jenkins CI/CD & Ansible automation</li>
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> Infrastructure as Code (Terraform)</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 hover:border-cyan-500/40 transition-all duration-300">
              <h4 className="text-white font-bold mb-4 text-lg flex items-center gap-2"><span className="text-cyan-400">🤖</span> GenAI | MLOps</h4>
              <ul className="text-white/70 space-y-3 text-sm leading-relaxed">
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> GenAI-powered incident assistance</li>
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> Cloud ML deployment | monitoring</li>
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> PII identification | remediation</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-8 text-cyan-400">Tool Stack & Technical Skills</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest text-cyan-300">☁️ Cloud | Infrastructure</h4>
              <div className="flex flex-wrap gap-3">
                {["AWS", "Azure", "GCP", "EKS", "Lambda", "Functions", "Compute Instances", "Object Storage", "CloudWatch"].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 text-sm font-medium text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest text-cyan-300">📈 Observability | Monitoring</h4>
              <div className="flex flex-wrap gap-3">
                {["Sumo Logic", "Splunk", "Dynatrace", "Grafana", "Prometheus", "Glassbox", "DataDog"].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 text-sm font-medium text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest text-cyan-300">⚡ Automation | DevOps</h4>
              <div className="flex flex-wrap gap-3">
                {["Jenkins", "Terraform", "Ansible", "Docker", "Kubernetes", "GitLab CI", "Git"].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 text-sm font-medium text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest text-cyan-300">🧠 GenAI | MLOps | Languages</h4>
              <div className="flex flex-wrap gap-3">
                {["GenAI", "LLMs", "Cloud ML", "Vector Search", "Python", "Shell/Bash", "YAML"].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 text-sm font-medium text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
