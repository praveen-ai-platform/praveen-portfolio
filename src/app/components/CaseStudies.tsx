const studies = [
  {
    title: "500 Errors without TraceId",
    desc: "Auto-detect exception spikes + top error messages from Kubernetes logs and summarize probable RCA.",
  },
  {
    title: "Salesforce Scheduling Alert Noise",
    desc: "Reduced duplicate alerts triggered by record updates by applying first-seen + suppression logic.",
  },
  {
    title: "Lambda Trigger Disabled Detection",
    desc: "Detect event source mapping / invocation issues using CloudWatch signals and notify via alert pipelines.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Case Studies</h2>
      <p className="mt-2 text-white/60">
        Real-world monitoring problems solved with reliability engineering + automation.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {studies.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20"
          >
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
