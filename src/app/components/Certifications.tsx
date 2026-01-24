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
    { award: "Multiple AMMY Awards", company: "Ameriprise Financial" },
    { award: "Special AMMY Gold Award", company: "Ameriprise Financial" },
    { award: "Spot Awards + Top Performer Recognition", company: "HP / HPE / DXC" },
  ];

  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl font-bold mb-12">Certifications & Awards</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
            <span className="text-2xl">🏆</span> Certifications
          </h3>
          <div className="space-y-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-white/50 text-lg">✓</span>
                <div>
                  <p className="text-white font-semibold">{cert.name}</p>
                  <p className="text-white/60 text-sm">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
            <span className="text-2xl">🎓</span> Awards & Recognition
          </h3>
          <div className="space-y-6">
            {awards.map((item, idx) => (
              <div key={idx} className="border-l-2 border-white/20 pl-6">
                <p className="text-white font-semibold">{item.award}</p>
                <p className="text-white/60">{item.company}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <h4 className="text-lg font-semibold mb-3">Education</h4>
            <p className="text-white">B.Tech</p>
            <p className="text-white/60">Jawaharlal Nehru Technological University, Andhra Pradesh, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
