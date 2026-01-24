export default function Timeline() {
  const experiences = [
    {
      company: "Ameriprise Financial",
      title: "Senior Platform Reliability Engineer",
      period: "Mar 2023 – Present",
      highlights: [
        "Owned enterprise observability strategy using Sumo Logic, Grafana/Prometheus, Dynatrace, Glassbox, and Splunk",
        "Built AWS monitoring coverage for EKS, Lambda, Batch, EC2, S3 across logs and metrics",
        "Delivered AIOps improvements: anomaly detection, alert noise reduction, correlation-driven triage",
        "Implemented Terraform-based automation for consistent monitor provisioning across environments",
        "Deployed GenAI-driven workflows: log summarization, error grouping, guided troubleshooting patterns",
        "Implemented PII identification and remediation using Amazon Comprehend",
      ],
      skills: ["Sumo Logic", "Splunk", "Dynatrace", "Grafana/Prometheus", "Terraform", "AIOps", "GenAI (RAG)", "SageMaker"],
    },
    {
      company: "DXC Technology",
      title: "DevOps / Reliability Engineer",
      period: "Jul 2014 – Mar 2023",
      highlights: [
        "Client: London Markets (Jun 2019 – Mar 2023) — Built and maintained robust CI/CD pipelines using Jenkins",
        "Led Jenkins enablement: RBAC, auditing, notifications, pipeline standardization",
        "Containerized services using Docker and supported Kubernetes deployments via YAML manifests",
        "Integrated SonarQube + JUnit for quality gates and shift-left practices",
        "Client: P&G (Nov 2017 – Jun 2019) — Owned Jenkins pipeline configurations and troubleshooting",
        "Client: Verisign/Symantec (Jul 2014 – Nov 2017) — Supported Oracle maintenance and production RCA",
      ],
      skills: ["Jenkins", "Docker", "Kubernetes", "Terraform", "SonarQube", "Nexus", "Git"],
    },
  ];

  return (
    <section id="timeline" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Career Timeline</h2>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-2 border-gradient-to-b from-cyan-500/40 to-blue-500/40 pl-8 transition-all duration-300 hover:border-cyan-500/80">
            <div className="absolute w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full -left-3 top-6 shadow-lg shadow-cyan-500/50"></div>
            
            <div className="mb-3">
            <h3 className="text-lg font-bold text-cyan-300">{exp.company}</h3>
            <p className="text-base text-white/90 font-semibold mt-1.5">{exp.title}</p>
              <p className="text-cyan-400/60 text-xs font-medium mt-0.5">{exp.period}</p>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="text-white/75 flex gap-3 leading-relaxed">
                  <span className="text-cyan-400 mt-1 flex-shrink-0">→</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-500/40 px-3 py-1.5 text-xs text-cyan-300 hover:border-cyan-500/60 hover:from-cyan-500/25 hover:to-blue-500/25 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
