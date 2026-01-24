export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/10 bg-gradient-to-r from-black via-black/95 to-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-sm font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Praveen<span className="text-white/50"> • SRE • Observability • AIOps</span>
        </div>

        <nav className="hidden gap-8 text-sm text-white/70 md:flex">
          <a className="relative group hover:text-cyan-400 transition-colors duration-300 font-medium" href="#about">
            About
            <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 w-0 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a className="relative group hover:text-cyan-400 transition-colors duration-300 font-medium" href="#portfolio">
            Portfolio
            <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 w-0 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a className="relative group hover:text-cyan-400 transition-colors duration-300 font-medium" href="#timeline">
            Experience
            <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 w-0 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a className="relative group hover:text-cyan-400 transition-colors duration-300 font-medium" href="#certifications">
            Certifications
            <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 w-0 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a className="relative group hover:text-cyan-400 transition-colors duration-300 font-medium" href="#contact">
            Contact
            <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 w-0 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          className="group relative rounded-lg border border-cyan-500/40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 hover:border-cyan-500/80 hover:from-cyan-500/20 hover:to-blue-500/20 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
