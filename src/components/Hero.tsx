import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#b5cc2e]/10 via-transparent to-transparent" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(181,204,46,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(181,204,46,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image src="/logo.jpg" alt="Zone Fitness" width={100} height={100} className="rounded-2xl" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#b5cc2e]/20 border border-[#b5cc2e]/40 text-[#b5cc2e] text-sm font-semibold px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-[#b5cc2e] rounded-full animate-pulse" />
          Bouskoura&apos;s #1 Fitness Club
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none">
          FORGE TON
          <br />
          <span className="text-[#b5cc2e]">MEILLEUR</span>
          <br />
          CORPS
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Zone Fitness Bouskoura — ton espace d&apos;entraînement complet. Musculation,
          cardio, coaching personnalisé et bien plus encore.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="bg-[#b5cc2e] hover:bg-[#a0b828] text-black font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
          >
            Commencer maintenant
          </a>
          <a
            href="#activities"
            className="border border-white/20 hover:border-[#b5cc2e] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/5"
          >
            Voir les activités
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-20 pt-10 border-t border-white/10">
          {[
            { value: "500+", label: "Membres" },
            { value: "10+", label: "Activités" },
            { value: "5★", label: "Évaluation" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-black text-[#b5cc2e]">{s.value}</p>
              <p className="text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs">
        <span>Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#b5cc2e] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
