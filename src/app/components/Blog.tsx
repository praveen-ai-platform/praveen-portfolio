"use client";

const blogPosts = [
  {
    icon: "📊",
    date: "January 20, 2026",
    title: "High-Signal Observability: Reducing Alert Fatigue with AI",
    desc: "Strategies for designing alert pipelines that actually matter. Learn how to use ML clustering to reduce repetitive alerts by 80%.",
    link: "#",
  },
  {
    icon: "🚀",
    date: "January 15, 2026",
    title: "Building AIOps Workflows for Incident Response",
    desc: "End-to-end guide on automating root cause analysis using LLMs + observability data. From logs to insights in seconds.",
    link: "#",
  },
  {
    icon: "🔍",
    date: "January 10, 2026",
    title: "Kubernetes Observability at Scale: Beyond Prometheus",
    desc: "Deep dive into multi-cluster monitoring, distributed tracing, and building golden dashboards for enterprise Kubernetes.",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
      <p className="text-white/70 mb-12">Insights on observability, SRE, and AI-powered operations.</p>

      <div className="space-y-6">
        {blogPosts.map((post, idx) => (
          <a key={idx} href={post.link} className="group block">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-white/30 hover:bg-white/10 transition-all">
              <div className="flex gap-4">
                <span className="text-3xl">{post.icon}</span>
                <div className="flex-1">
                  <p className="text-sm text-white/60">{post.date}</p>
                  <h3 className="text-xl font-semibold mt-2 group-hover:text-white/80 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/70 mt-2">{post.desc}</p>
                  <p className="text-white/60 mt-4 inline-block group-hover:text-white transition-colors">
                    Read More →
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <a href="#" className="inline-block mt-10 px-6 py-3 rounded-lg border border-white/30 hover:border-white/60 transition-colors font-semibold">
        View All Posts
      </a>
    </section>
  );
}
