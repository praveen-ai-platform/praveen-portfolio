export default function Footer() {
  return (
    <footer id="contact" className="border-t border-cyan-500/20 bg-gradient-to-t from-cyan-500/5 to-transparent">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Let's Connect</h2>
          <p className="text-white/70 mb-8 max-w-2xl text-base leading-relaxed">
            Open to opportunities in Platform Reliability, Observability, AIOps, and roles involving GenAI (RAG) and MLOps operationalization.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <a
              href="mailto:praveen.ai.platform@gmail.com"
              className="group flex items-center gap-2.5 px-5 py-3 rounded-lg border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:border-cyan-500/60 hover:from-cyan-500/20 hover:to-blue-500/20 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 font-semibold text-cyan-300"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">📧</span>
              <div>
                <div className="text-xs text-white/60">Email</div>
                <div className="text-xs truncate">praveen.ai...</div>
              </div>
            </a>
            <a
              href="tel:+919392981851"
              className="group flex items-center gap-2.5 px-5 py-3 rounded-lg border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:border-cyan-500/60 hover:from-cyan-500/20 hover:to-blue-500/20 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 font-semibold text-cyan-300"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">📞</span>
              <div>
                <div className="text-xs text-white/60">Phone</div>
                <div className="text-xs">+91 939 298...</div>
              </div>
            </a>
            <a
              href="https://github.com/praveen-ai-platform"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 px-5 py-3 rounded-lg border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:border-cyan-500/60 hover:from-cyan-500/20 hover:to-blue-500/20 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 font-semibold text-cyan-300"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">🐙</span>
              <div>
                <div className="text-xs text-white/60">GitHub</div>
                <div className="text-xs">praveen-ai...</div>
              </div>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="group relative flex items-center gap-2.5 px-5 py-3 rounded-lg font-semibold text-black overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">⬇️</span>
              <div>
                <div className="text-xs text-black/70">Download</div>
                <div className="text-xs">Resume</div>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Praveen • Platform Reliability Engineer • Built with Next.js • <span className="text-cyan-400">Observability • AIOps • GenAI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
