const coaches = [
  {
    name: "Coach Mehdi",
    role: "Musculation & Force",
    exp: "8 ans d'expérience",
    emoji: "💪",
    specialties: ["Prise de masse", "Force", "Powerlifting"],
  },
  {
    name: "Coach Sara",
    role: "Fitness & Bien-être",
    exp: "5 ans d'expérience",
    emoji: "🏃‍♀️",
    specialties: ["Perte de poids", "Cardio", "Yoga"],
  },
  {
    name: "Coach Karim",
    role: "Boxing & Arts Martiaux",
    exp: "10 ans d'expérience",
    emoji: "🥊",
    specialties: ["Boxe", "Kickboxing", "Self-défense"],
  },
  {
    name: "Coach Nadia",
    role: "Nutrition & Coaching",
    exp: "6 ans d'expérience",
    emoji: "🥗",
    specialties: ["Diététique", "Coaching holistique", "Fitness féminin"],
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#b5cc2e] text-sm font-bold uppercase tracking-widest">
            Notre équipe
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2 mb-4">NOS COACHES</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Des professionnels certifiés passionnés par le sport et dédiés à votre réussite.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((c) => (
            <div
              key={c.name}
              className="card-hover bg-[#1f1f1f] border border-white/5 rounded-2xl p-6 text-center group"
            >
              <div className="w-20 h-20 bg-[#b5cc2e]/10 border border-[#b5cc2e]/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 group-hover:border-[#b5cc2e] transition-colors">
                {c.emoji}
              </div>
              <h3 className="font-bold text-lg group-hover:text-[#b5cc2e] transition-colors">
                {c.name}
              </h3>
              <p className="text-[#b5cc2e] text-sm font-semibold mt-1">{c.role}</p>
              <p className="text-gray-500 text-xs mt-1 mb-4">{c.exp}</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {c.specialties.map((s) => (
                  <span
                    key={s}
                    className="bg-white/5 text-gray-300 text-xs px-2 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
