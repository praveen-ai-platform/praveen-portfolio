const skills = [
  "AWS (Lambda, CloudWatch, SNS, SQS, Step Functions, EKS)",
  "Sumo Logic • Grafana • Dynatrace • Glassbox",
  "Prometheus • Alertmanager • Kubernetes Observability",
  "Python • SPL • Automation Workflows",
  "GenAI for Monitoring (RCA summaries, clustering, insights)",
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Skills</h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {skills.map((s) => (
          <div
            key={s}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
