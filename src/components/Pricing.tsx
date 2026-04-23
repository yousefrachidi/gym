"use client";

const plans = [
  {
    name: "1 Mois",
    price: "300",
    period: "/ mois",
    description: "Idéal pour commencer",
    features: [
      "Accès salle de musculation",
      "Accès espace cardio",
      "Cours collectifs inclus",
      "Vestiaires & douches",
    ],
    note: null,
    cta: "S'inscrire",
    highlighted: false,
    badge: null,
  },
  {
    name: "6 Mois",
    price: "1 400",
    period: "/ 6 mois",
    description: "Économise 400 DH",
    features: [
      "Accès salle de musculation",
      "Accès espace cardio",
      "Cours collectifs inclus",
      "Vestiaires & douches",
      "Facilité de paiement (2 tranches)",
    ],
    note: "soit 233 DH / mois",
    cta: "S'inscrire",
    highlighted: false,
    badge: null,
  },
  {
    name: "12 Mois",
    price: "1 800",
    period: "/ an",
    description: "Meilleur rapport qualité-prix",
    features: [
      "Accès salle de musculation",
      "Accès espace cardio",
      "Cours collectifs inclus",
      "Vestiaires & douches",
      "Facilité de paiement (2 tranches)",
    ],
    note: "soit 150 DH / mois",
    cta: "S'inscrire",
    highlighted: true,
    badge: "Meilleure offre",
  },
];

const coursFemsmes = ["Yoga", "Zumba", "Gym ballon"];
const courHommes = ["Step", "Spinning", "Cross fit"];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#b5cc2e] text-xs font-bold uppercase tracking-widest">Nos tarifs</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2 mb-3">Abonnements</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Des formules adaptées à tous les budgets — avec facilité de paiement sur 2 tranches.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all ${
                plan.highlighted
                  ? "bg-[#b5cc2e] scale-105 shadow-2xl shadow-[#b5cc2e]/20"
                  : "bg-[#1a1a1a] border border-white/5 hover:border-[#b5cc2e]/30"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-5 right-5">
                  <div className="bg-black text-[#b5cc2e] text-xs font-black px-3 py-1 rounded-full rotate-12 shadow-lg">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div>
                <p className={`text-sm font-bold mb-1 ${plan.highlighted ? "text-black/70" : "text-[#b5cc2e]"}`}>
                  {plan.name}
                </p>
                <p className={`text-xs mb-6 ${plan.highlighted ? "text-black/60" : "text-gray-500"}`}>
                  {plan.description}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span className={`text-5xl font-black ${plan.highlighted ? "text-black" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${plan.highlighted ? "text-black/60" : "text-gray-400"}`}>
                    DH{plan.period}
                  </span>
                </div>
                {plan.note && (
                  <p className={`text-xs mb-6 font-semibold ${plan.highlighted ? "text-black/70" : "text-[#b5cc2e]"}`}>
                    ≈ {plan.note}
                  </p>
                )}
                {!plan.note && <div className="mb-6" />}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlighted ? "text-black" : "text-gray-300"}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${plan.highlighted ? "bg-black/20 text-black" : "bg-[#b5cc2e]/20 text-[#b5cc2e]"}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-bold py-3.5 rounded-xl transition-all ${
                  plan.highlighted
                    ? "bg-black text-[#b5cc2e] hover:bg-zinc-900"
                    : "bg-[#b5cc2e] hover:bg-[#a0b828] text-black"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Pack Duo */}
        <div className="bg-[#1a1a1a] border border-[#b5cc2e]/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="text-4xl">👥</div>
            <div>
              <p className="text-[#b5cc2e] text-xs font-bold uppercase tracking-widest mb-1">Offre Spéciale</p>
              <h3 className="text-2xl font-black text-white">Pack Duo — 12 Mois</h3>
              <p className="text-gray-400 text-sm mt-1">Venez à deux et économisez ! Facilité de paiement sur 2 tranches.</p>
            </div>
          </div>
          <div className="text-center sm:text-right flex-shrink-0">
            <p className="text-5xl font-black text-white">3 400 <span className="text-2xl text-gray-400">DH</span></p>
            <p className="text-[#b5cc2e] text-sm font-semibold mt-1">soit 1 700 DH / personne</p>
            <a
              href="#contact"
              className="mt-4 inline-block bg-[#b5cc2e] hover:bg-[#a0b828] text-black font-bold px-8 py-3 rounded-xl transition-all"
            >
              Profiter de l&apos;offre
            </a>
          </div>
        </div>

        {/* Cours collectifs */}
        <div className="mt-10 bg-[#1a1a1a] border border-white/5 rounded-2xl p-8">
          <p className="text-[#b5cc2e] text-xs font-bold uppercase tracking-widest mb-4 text-center">Inclus dans tous les abonnements</p>
          <h3 className="text-xl font-black text-center mb-8">Cours collectifs inclus</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-black/30 rounded-xl p-5">
              <p className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-xl">👩</span> Cours femmes
              </p>
              <div className="flex flex-wrap gap-2">
                {coursFemsmes.map((c) => (
                  <span key={c} className="bg-[#b5cc2e]/10 border border-[#b5cc2e]/30 text-[#b5cc2e] text-sm font-semibold px-3 py-1 rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-black/30 rounded-xl p-5">
              <p className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-xl">👨</span> Cours hommes
              </p>
              <div className="flex flex-wrap gap-2">
                {courHommes.map((c) => (
                  <span key={c} className="bg-[#b5cc2e]/10 border border-[#b5cc2e]/30 text-[#b5cc2e] text-sm font-semibold px-3 py-1 rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          * Prix en Dirhams marocains (MAD). Facilité de paiement disponible sur 2 tranches.
        </p>
      </div>
    </section>
  );
}
