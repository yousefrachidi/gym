import Image from "next/image";

const checks = [
  "Musculation, CrossFit & Arts Martiaux",
  "Espaces 100% femmes & 100% hommes",
  "Coaches certifiés — Dépassez vos limites",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo grid */}
          <div className="relative h-[520px] hidden lg:block">
            <div className="absolute top-0 left-0 w-56 h-64 rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80&auto=format&fit=crop"
                alt="Fitness"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 right-0 w-56 h-72 rounded-2xl overflow-hidden shadow-2xl z-20">
              <Image
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80&auto=format&fit=crop"
                alt="Musculation"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="absolute bottom-0 left-12 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl z-30">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80&auto=format&fit=crop"
                alt="Training"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent dot */}
            <div className="absolute bottom-16 right-8 w-16 h-16 rounded-full bg-[#b5cc2e] z-0 opacity-60 blur-sm" />
          </div>

          {/* Mobile: single image */}
          <div className="relative h-72 rounded-2xl overflow-hidden lg:hidden">
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80&auto=format&fit=crop"
              alt="Training"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <span className="text-[#b5cc2e] text-xs font-bold uppercase tracking-widest">À propos de nous</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-6 leading-tight">
              Respecte ton corps,
              <br />
              c&apos;est ton plus grand atout
            </h2>

            <ul className="space-y-4 mb-10">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#b5cc2e] flex items-center justify-center flex-shrink-0 text-black text-xs font-black">✓</span>
                  <span className="text-gray-300">{c}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="bg-[#b5cc2e] hover:bg-[#a0b828] text-black font-bold px-8 py-4 rounded-lg transition-all hover:scale-105">
                Rejoindre maintenant
              </a>
              <a href="#contact" className="border border-white/20 hover:border-[#b5cc2e] text-white font-bold px-8 py-4 rounded-lg transition-all hover:bg-white/5">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
