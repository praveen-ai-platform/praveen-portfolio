export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-sm font-semibold tracking-wide">
          Praveen<span className="text-white/50"> | Platform Reliability | AIOps</span>
        </div>

        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a className="hover:text-white transition-colors" href="#about">
            About
          </a>
          <a className="hover:text-white transition-colors" href="#portfolio">
            Portfolio
          </a>
          <a className="hover:text-white transition-colors" href="#timeline">
            Experience
          </a>
          <a className="hover:text-white transition-colors" href="#certifications">
            Certifications
          </a>
          <a className="hover:text-white transition-colors" href="#contact">
            Contact
          </a>
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          className="rounded-lg border border-white/15 px-4 py-2 text-sm hover:border-white/30 transition-colors"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
