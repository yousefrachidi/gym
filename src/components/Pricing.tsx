const plans = [
  {
    name: "Basic",
    price: "299",
    period: "/ mois",
    description: "Idéal pour débuter",
    features: [
      "Accès salle de musculation",
      "Accès espace cardio",
      "Vestiaires & douches",
      "Suivi de départ",
    ],
    notIncluded: ["Cours collectifs", "Coaching personnel"],
    cta: "Choisir Basic",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "449",
    period: "/ mois",
    description: "Le plus populaire",
    features: [
      "Accès salle de musculation",
      "Accès espace cardio",
      "Cours collectifs illimités",
      "Vestiaires & douches",
      "Suivi mensuel avec coach",
      "Programme personnalisé",
    ],
    notIncluded: [],
    cta: "Choisir Premium",
    highlighted: true,
  },
  {
    name: "Elite",
    price: "699",
    period: "/ mois",
    description: "Pour les plus ambitieux",
    features: [
      "Tout Premium inclus",
      "Coaching personnel illimité",
      "Nutrition & diététique",
      "Accès prioritaire",
      "Analyse de composition corporelle",
      "Support WhatsApp coach",
    ],
    notIncluded: [],
    cta: "Choisir Elite",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#b5cc2e] text-sm font-bold uppercase tracking-widest">
            Nos tarifs
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2 mb-4">ABONNEMENTS</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Des formules adaptées à tous les budgets et tous les objectifs. Sans engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all ${
                plan.highlighted
                  ? "bg-[#b5cc2e] border-[#b5cc2e] scale-105 shadow-2xl shadow-[#b5cc2e]/20"
                  : "bg-[#1f1f1f] border-white/5 card-hover"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-[#b5cc2e] text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  Populaire
                </div>
              )}

              <p className={`text-sm font-semibold mb-1 ${plan.highlighted ? "text-black/70" : "text-[#b5cc2e]"}`}>
                {plan.name}
              </p>
              <p className={`text-xs mb-6 ${plan.highlighted ? "text-black/60" : "text-gray-500"}`}>
                {plan.description}
              </p>

              <div className="flex items-end gap-1 mb-8">
                <span className={`text-5xl font-black ${plan.highlighted ? "text-black" : "text-white"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm mb-2 ${plan.highlighted ? "text-black/70" : "text-gray-400"}`}>
                  DH{plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlighted ? "text-black" : "text-white"}`}>
                    <span className={`text-lg ${plan.highlighted ? "text-black" : "text-[#b5cc2e]"}`}>✓</span>
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm opacity-40 text-white">
                    <span className="text-lg">✕</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-bold py-3 rounded-full transition-all ${
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

        <p className="text-center text-gray-500 text-sm mt-10">
          * Tous les prix sont en Dirhams marocains (MAD). Contactez-nous pour les abonnements annuels.
        </p>
      </div>
    </section>
  );
}
