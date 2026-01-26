export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Expertise in Action</h2>

      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group">
            <h3 className="text-lg font-bold mb-4 text-cyan-300">What I Do</h3>
            <div className="space-y-3 text-white/80 leading-relaxed text-base">
              <p>
                Expert at implementing and optimizing enterprise observability platforms. Specialized in configuring and leveraging monitoring stacks (Sumo Logic, Splunk, Grafana/Prometheus, Dynatrace, Glassbox) and cloud infrastructure (AWS EKS, Lambda, Batch) to deliver actionable insights and drive operational excellence.
              </p>
              <p>
                Specialist in turning data into intelligence through AIOps patterns—anomaly detection, alert correlation, and intelligent triage. I bridge the gap between reliability engineering and emerging technologies like GenAI and MLOps.
              </p>
              <p>
                Strong hands-on background with infrastructure automation (Terraform, Jenkins, Kubernetes, Docker), PII-aware data pipelines, and building AI-powered incident assistance systems.
              </p>
            </div>
          </div>

          <div className="group">
            <h3 className="text-lg font-bold mb-4 text-cyan-300">Velocity & Ownership</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-4 p-4 rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 hover:border-cyan-500/40 hover:from-cyan-500/10 transition-all duration-300">
                <span className="text-cyan-400 text-xl font-bold flex-shrink-0">→</span>
                <span><strong className="text-cyan-300">Rapid self-learner</strong> who masters complex tools independently and drives quick adoption across teams without relying on external expertise.</span>
              </li>
              <li className="flex gap-4 p-4 rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 hover:border-cyan-500/40 hover:from-cyan-500/10 transition-all duration-300">
                <span className="text-cyan-400 text-xl font-bold flex-shrink-0">→</span>
                <span><strong className="text-cyan-300">Full-cycle individual contributor</strong> who owns problems end-to-end—from design and implementation to troubleshooting and team enablement.</span>
              </li>
              <li className="flex gap-4 p-4 rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 hover:border-cyan-500/40 hover:from-cyan-500/10 transition-all duration-300">
                <span className="text-cyan-400 text-xl font-bold flex-shrink-0">→</span>
                <span><strong className="text-cyan-300">Proactive problem solver</strong> focused on anticipating reliability issues, automating toil, and building systems that scale without constant firefighting.</span>
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
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> GenAI-powered incident intelligence with RAG patterns</li>
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> AWS SageMaker ML pipelines: training, deployment, monitoring</li>
                <li className="flex gap-2"><span className="text-cyan-400/60">▸</span> MLOps workflow automation: feature engineering, model versioning</li>
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
                {["GenAI", "LLMs", "SageMaker", "ML Pipelines", "Vector Search", "Python", "Shell/Bash", "YAML"].map((tech) => (
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
