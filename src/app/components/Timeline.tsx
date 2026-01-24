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
    <section id="timeline" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl font-bold mb-12">Career Timeline</h2>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-2 border-white/20 pl-8">
            <div className="absolute w-4 h-4 bg-white rounded-full -left-2.5 top-6"></div>
            
            <div className="mb-4">
            <h3 className="text-lg font-bold">{exp.company}</h3>
            <p className="text-base text-white/80 font-semibold mt-1">{exp.title}</p>
              <p className="text-white/60 text-sm">{exp.period}</p>
            </div>

            <ul className="space-y-2 mb-6">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="text-white/70 flex gap-3">
                  <span className="text-white/50 mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70"
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
