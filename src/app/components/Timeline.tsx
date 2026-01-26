export default function Timeline() {
  const experiences = [
    {
      company: "Enterprise Observability Platform",
      title: "End-to-End Implementation",
      period: "2023 – Present",
      highlights: [
        "Designed and deployed multi-tool observability stack: Sumo Logic, Grafana/Prometheus, Dynatrace, Glassbox, Splunk",
        "Implemented comprehensive AWS monitoring infrastructure for EKS, Lambda, Batch, EC2, S3 with enterprise-grade log & metric collection",
        "Built AIOps framework: anomaly detection engine, intelligent alert correlation, automated triage workflows",
        "Implemented Infrastructure-as-Code using Terraform for 100+ monitor provisioning across environments",
        "Developed GenAI-powered incident assistant with RAG patterns for knowledge retrieval and troubleshooting",
        "Built PII detection and remediation pipeline using cloud-native services for compliance & data privacy",
      ],
      skills: ["Sumo Logic", "Splunk", "Dynatrace", "Grafana/Prometheus", "Terraform", "AIOps", "GenAI (RAG)", "SageMaker"],
    },
    {
      company: "CI/CD Automation & Container Orchestration",
      title: "Jenkins, Docker & Kubernetes Implementation",
      period: "2014 – 2023",
      highlights: [
        "Designed and deployed enterprise Jenkins infrastructure with RBAC, audit logging, notifications, and standardized pipeline templates",
        "Led Jenkins enablement program: best practices adoption, pipeline optimization, team training on 100+ developers",
        "Containerized microservices using Docker with comprehensive image optimization and security scanning",
        "Orchestrated containerized workloads with Kubernetes: YAML manifests, deployment strategies, scaling policies",
        "Integrated SonarQube + JUnit for quality gates, shift-left testing, and automated code quality enforcement",
        "Managed artifact repositories using Nexus: versioning, security policies, dependency management",
      ],
      skills: ["Jenkins", "Docker", "Kubernetes", "Terraform", "SonarQube", "Nexus", "Git"],
    },
  ];

  return (
    <section id="timeline" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technical Journey</h2>

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
