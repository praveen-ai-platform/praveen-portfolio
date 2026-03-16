export default function Certifications() {
  const certifications = [
    { name: "AWS Certified AI Practitioner", org: "Amazon Web Services" },
    { name: "AWS Machine Learning Associate", org: "Amazon Web Services" },
    { name: "AWS Certified Solutions Architect – Associate", org: "Amazon Web Services" },
    { name: "Terraform Certified Associate", org: "HashiCorp" },
    { name: "NVIDIA Certified Associate AI Infrastructure Ops", org: "NVIDIA" },
    { name: "Sumo Logic: Search Mastery", org: "Sumo Logic" },
    { name: "Sumo Logic: Metrics Mastery", org: "Sumo Logic" },
    { name: "Sumo Logic: Observability Fundamentals", org: "Sumo Logic" },
    { name: "Glassbox Certified Proficient", org: "Glassbox" },
  ];

  const awards = [
    { award: "Multiple AMMY Awards", company: "Organization-Level Recognitions" },
    { award: "Special AMMY Gold Award", company: "Organization-Level Recognitions" },
    { award: "Spot Awards + Top Performer Recognition", company: "Organization-Level Recognitions" },
  ];

  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications & Awards</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">🏆</span> <span className="text-cyan-400">Certifications</span>
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="group flex gap-4 p-4 rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 hover:border-cyan-500/40 hover:from-cyan-500/10 hover:to-blue-500/10 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <span className="text-cyan-400 text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">✓</span>
                <div>
                  <p className="text-white font-semibold group-hover:text-cyan-300 transition-colors">{cert.name}</p>
                  <p className="text-cyan-400/60 text-sm">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">🎓</span> <span className="text-cyan-400">Awards & Recognition</span>
          </h3>
          <div className="space-y-6">
            {awards.map((item, idx) => (
              <div key={idx} className="border-l-3 border-gradient-to-b from-cyan-500/60 to-blue-500/40 pl-6 py-3 hover:border-cyan-500/80 transition-all duration-300">
                <p className="text-white font-semibold text-lg">{item.award}</p>
                <p className="text-cyan-400/70">{item.company}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 pt-8 border-t border-cyan-500/20">
            <h4 className="text-lg font-semibold mb-3 text-cyan-300">🎓 Education</h4>
            <p className="text-white font-semibold text-lg">Bachelor of Technology (B.Tech)</p>
            <p className="text-cyan-400/70 leading-relaxed">Jawaharlal Nehru Technological University, Andhra Pradesh, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
