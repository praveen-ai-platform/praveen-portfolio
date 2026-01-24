const metrics = [
  { k: "20+ Panels", v: "Built for P1 monitoring dashboards" },
  { k: "15 Apps", v: "Observed across critical services" },
  { k: "Noise ↓", v: "Reduced repetitive alert triggers" },
  { k: "MTTR ↓", v: "Faster triage using automation + insights" },
];

export default function Impact() {
  return (
    <section id="impact" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Impact</h2>
      <p className="mt-2 text-white/60">
        Outcomes I focus on: fewer false alerts, faster incident detection, and quicker root cause analysis.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {metrics.map((m) => (
          <div
            key={m.k}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-2xl font-semibold">{m.k}</div>
            <div className="mt-2 text-sm text-white/70">{m.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
