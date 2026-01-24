export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-white/70 mb-8 max-w-2xl">
            Open to opportunities in Platform Reliability, Observability, AIOps, and roles involving GenAI (RAG) and MLOps operationalization.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:praveen.ai.platform@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 hover:border-white/60 transition-colors"
            >
              <span>📧</span> Email
            </a>
            <a
              href="tel:+919392981851"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 hover:border-white/60 transition-colors"
            >
              <span>📞</span> Call
            </a>
            <a
              href="https://github.com/praveen-ai-platform"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 hover:border-white/60 transition-colors"
            >
              <span>🐙</span> GitHub
            </a>
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition-colors font-semibold"
            >
              <span>⬇️</span> Resume
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Praveen • Built for Platform Reliability / Observability / AIOps roles
          </p>
        </div>
      </div>
    </footer>
  );
}
