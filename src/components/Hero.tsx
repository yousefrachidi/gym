import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80&auto=format&fit=crop"
        alt="Gym background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-none tracking-tight mb-4 sm:mb-6">
            FORGE TON
            <br />
            CORPS, ÉLÈVE
            <br />
            TON <span className="text-[#b5cc2e]">FITNESS</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-lg max-w-xl mb-3 leading-relaxed">
            Musculation · CrossFit · Arts Martiaux — Dépassez vos limites avec nous 💪
          </p>
          <p className="text-gray-400 text-xs sm:text-sm max-w-lg mb-8 sm:mb-10">
            🏋🏻‍♀️ 100% Femmes &nbsp;|&nbsp; 🏋️ 100% Hommes &nbsp;|&nbsp; Ouvert 7j/7
          </p>

          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
            <a href="#pricing" className="bg-[#b5cc2e] hover:bg-[#a0b828] text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base transition-all hover:scale-105 text-center">
              S&apos;inscrire
            </a>
            <a href="#classes" className="flex items-center justify-center gap-3 text-white font-semibold hover:text-[#b5cc2e] transition-colors group">
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white group-hover:border-[#b5cc2e] flex items-center justify-center transition-colors text-sm">
                ▶
              </span>
              <span className="text-sm sm:text-base">Voir les activités</span>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 sm:gap-12 mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-white/20">
          {[
            { value: "47.8K", label: "Followers Instagram" },
            { value: "1 448", label: "Publications" },
            { value: "7j/7", label: "Ouvert" },
            { value: "100%", label: "Hommes & Femmes" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl sm:text-4xl font-black text-[#b5cc2e]">{s.value}</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
