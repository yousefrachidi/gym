const activities = [
  {
    icon: "🏋️",
    title: "Musculation",
    description:
      "Équipements professionnels haut de gamme pour sculter ton corps et gagner en force.",
  },
  {
    icon: "🥊",
    title: "Boxing",
    description:
      "Cours de boxe pour tous les niveaux. Cardio intense, technique et self-défense.",
  },
  {
    icon: "🏃",
    title: "Cardio",
    description:
      "Tapis, vélos, elliptiques — tout pour brûler les calories et améliorer ton endurance.",
  },
  {
    icon: "🧘",
    title: "Fitness & Cours collectifs",
    description:
      "Zumba, yoga, pilates et plus encore. Des cours animés par des coachs certifiés.",
  },
  {
    icon: "🤸",
    title: "Functional Training",
    description:
      "Entraînements fonctionnels pour développer force, agilité et coordination.",
  },
  {
    icon: "👶",
    title: "Espace Kids",
    description:
      "Un espace dédié aux enfants pour les initier au sport dans un cadre sécurisé et fun.",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#b5cc2e] text-sm font-bold uppercase tracking-widest">
            Ce qu&apos;on offre
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2 mb-4">NOS ACTIVITÉS</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Un programme complet pour chaque objectif — perte de poids, prise de masse,
            bien-être ou performance sportive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a) => (
            <div
              key={a.title}
              className="card-hover bg-[#1f1f1f] border border-white/5 rounded-2xl p-8 group"
            >
              <div className="text-4xl mb-4">{a.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#b5cc2e] transition-colors">
                {a.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
