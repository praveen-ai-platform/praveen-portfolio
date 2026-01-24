export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl font-bold mb-12">About Me</h2>

      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-6">Professional Summary</h3>
            <div className="space-y-4 text-white/80 leading-relaxed">
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

          <div>
            <h3 className="text-lg font-semibold mb-6">What Sets Me Apart</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3">
                <span className="text-white text-lg">•</span>
                <span><strong>High-ownership individual contributor</strong> with end-to-end execution across monitoring design, automation, troubleshooting, and enablement.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white text-lg">•</span>
                <span><strong>Rapid self-learner</strong> who independently adopted enterprise solutions across multiple observability platforms and infrastructure tools.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white text-lg">•</span>
                <span><strong>Proactive mindset</strong> focused on early detection, actionable alerting, and operational excellence to reduce repeat incidents and improve reliability.</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-8">Core Strengths</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Platform & Operations</h4>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>• Incident triage & Root Cause Analysis (RCA)</li>
                <li>• Proactive monitoring & MTTR reduction</li>
                <li>• Observability architecture & strategy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Observability Engineering</h4>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>• Dashboard design across logs & metrics</li>
                <li>• Alert engineering & noise reduction</li>
                <li>• Correlation-driven triage</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">AIOps & Automation</h4>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>• Anomaly detection patterns</li>
                <li>• Jenkins CI/CD & Ansible automation</li>
                <li>• Infrastructure as Code (Terraform)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">GenAI | MLOps</h4>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>• GenAI-powered incident assistance</li>
                <li>• Cloud ML deployment | monitoring</li>
                <li>• PII identification | remediation</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Tool Stack & Technical Skills</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Cloud | Infrastructure</h4>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Azure", "GCP", "EKS", "Lambda", "Functions", "Compute Instances", "Object Storage", "CloudWatch"].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Observability | Monitoring</h4>
              <div className="flex flex-wrap gap-2">
                {["Sumo Logic", "Splunk", "Dynatrace", "Grafana", "Prometheus", "Glassbox", "DataDog"].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Automation | DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {["Jenkins", "Terraform", "Ansible", "Docker", "Kubernetes", "GitLab CI", "Git"].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">GenAI | MLOps | Languages</h4>
              <div className="flex flex-wrap gap-2">
                {["GenAI", "LLMs", "Cloud ML", "Vector Search", "Python", "Shell/Bash", "YAML"].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80">
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
