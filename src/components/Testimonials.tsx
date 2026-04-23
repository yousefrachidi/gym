"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Grâce aux séances personnalisées et au suivi de mon coach, j'ai perdu 15 kg, retrouvé confiance en moi et atteint un nouveau niveau de bien-être.",
    name: "Amine Belhaj",
    role: "Membre depuis 1 an",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
  },
  {
    quote: "Zone Fitness m'a transformé. L'équipe est professionnelle, les équipements sont top et l'ambiance est incroyable. Je recommande à 100%.",
    name: "Salma Idrissi",
    role: "Membre depuis 6 mois",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
  },
  {
    quote: "Le meilleur gym de Bouskoura sans hésitation. Les cours collectifs sont variés et les coaches sont vraiment à l'écoute de chaque membre.",
    name: "Mehdi Ouali",
    role: "Membre depuis 2 ans",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[#b5cc2e] text-xs font-bold uppercase tracking-widest">Témoignages</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-2">Ce que disent nos membres</h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 hover:bg-[#b5cc2e] hover:border-[#b5cc2e] text-white hover:text-black flex items-center justify-center transition-all text-lg"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-[#b5cc2e] hover:bg-[#a0b828] text-black flex items-center justify-center transition-all text-lg font-bold"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
            <Image
              src={t.img}
              alt={t.name}
              fill
              className="object-cover object-top transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Quote */}
          <div>
            <div className="text-6xl text-[#b5cc2e] font-black mb-4 leading-none">"</div>
            <p className="text-base sm:text-xl text-gray-200 leading-relaxed mb-8">
              {t.quote}
            </p>
            <div>
              <p className="text-white font-bold text-lg">{t.name}</p>
              <p className="text-[#b5cc2e] text-sm">{t.role}</p>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all ${i === current ? "bg-[#b5cc2e] w-8" : "bg-white/20 w-4"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
