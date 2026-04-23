import Image from "next/image";

const trainers = [
  {
    name: "Coach Hamid",
    role: "CrossFit · Tabata · Cardio · RMG",
    img: "/coach-hamid.jpg",
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
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                    Instagram
                  </a>
                ) : (
                  <a
                    href="https://www.instagram.com/zone_fitness_bouskoura/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-[#b5cc2e]/10 border border-white/10 hover:border-[#b5cc2e]/30 text-gray-500 hover:text-[#b5cc2e] text-xs font-bold px-3 py-1.5 rounded-full transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                    Zone Fitness
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
