import Image from "next/image";

const trainers = [
  {
    name: "Coach Hamid",
    role: "CrossFit · Tabata · Cardio · RMG",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80&auto=format&fit=crop",
    instagram: "https://www.instagram.com/coachhamid1/",
  },
  {
    name: "Coach Azzeddine",
    role: "ABDO · Cours Spéciaux",
    img: "/coach-azzeddine.jpg",
    instagram: "https://www.instagram.com/coachazzdine/",
  },
  {
    name: "Coach Yassine",
    role: "Spinning · Step · Cardio",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80&auto=format&fit=crop",
    instagram: null,
  },
  {
    name: "Coach Aymane",
    role: "Spinning · Tabata · CAF · RMG · Cross Training",
    img: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=400&q=80&auto=format&fit=crop",
    instagram: null,
  },
];

export default function Coaches() {
  return (
    <section id="trainers" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#b5cc2e] text-xs font-bold uppercase tracking-widest">Notre équipe</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2">Rencontrez nos Coaches</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((t) => (
            <div key={t.name} className="group text-center">
              {/* Photo */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-[#1a1a1a]">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="bg-[#1a1a1a] group-hover:bg-[#1f1f1f] rounded-xl p-4 transition-colors border border-white/5 group-hover:border-[#b5cc2e]/30">
                <h3 className="font-bold text-white group-hover:text-[#b5cc2e] transition-colors">{t.name}</h3>
                <p className="text-gray-400 text-xs mt-1 mb-3 leading-relaxed">{t.role}</p>

                {t.instagram ? (
                  <a
                    href={t.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#b5cc2e]/10 hover:bg-[#b5cc2e] border border-[#b5cc2e]/30 hover:border-[#b5cc2e] text-[#b5cc2e] hover:text-black text-xs font-bold px-3 py-1.5 rounded-full transition-all"
                  >
                    📸 Instagram
                  </a>
                ) : (
                  <a
                    href="https://www.instagram.com/zone_fitness_bouskoura/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-[#b5cc2e]/10 border border-white/10 hover:border-[#b5cc2e]/30 text-gray-500 hover:text-[#b5cc2e] text-xs font-bold px-3 py-1.5 rounded-full transition-all"
                  >
                    📸 Zone Fitness
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
