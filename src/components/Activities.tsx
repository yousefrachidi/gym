import Image from "next/image";

const classes = [
  {
    title: "Functional Training",
    category: "Force & Agilité",
    img: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Cardio & Cycling",
    category: "Endurance",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Yoga & Stretching",
    category: "Bien-être",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&auto=format&fit=crop",
  },
];

export default function Activities() {
  return (
    <section id="classes" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[#b5cc2e] text-xs font-bold uppercase tracking-widest">Nos cours</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-2 leading-tight">
              Des cours personnalisés
              <br />
              pour chaque objectif
            </h2>
          </div>
          <a href="#contact" className="border border-white/30 hover:border-[#b5cc2e] hover:text-[#b5cc2e] text-white font-semibold px-6 py-3 rounded-lg transition-all whitespace-nowrap text-sm">
            Tous les cours →
          </a>
        </div>

        {/* 3 photo cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classes.map((c) => (
            <div key={c.title} className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src={c.img}
                alt={c.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#b5cc2e] text-xs font-bold uppercase tracking-widest mb-1">{c.category}</p>
                <h3 className="text-white text-xl font-black">{c.title}</h3>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-[#b5cc2e] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-black font-black text-sm">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* More activities grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {[
            { icon: "🏋️", label: "Musculation" },
            { icon: "🥊", label: "Boxing" },
            { icon: "🏃", label: "Cardio" },
            { icon: "🤸", label: "Crossfit" },
            { icon: "🧘", label: "Yoga" },
            { icon: "👶", label: "Kids" },
          ].map((a) => (
            <div key={a.label} className="bg-[#1a1a1a] border border-white/5 hover:border-[#b5cc2e]/40 rounded-xl p-4 text-center transition-all group cursor-pointer">
              <div className="text-2xl mb-2">{a.icon}</div>
              <p className="text-xs font-semibold text-gray-400 group-hover:text-[#b5cc2e] transition-colors">{a.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
