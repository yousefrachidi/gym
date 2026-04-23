"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#b5cc2e] text-sm font-bold uppercase tracking-widest">
            On est là pour toi
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2 mb-4">CONTACT</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Une question ? Tu veux t&apos;inscrire ? Viens nous voir ou contacte-nous directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            {[
              { icon: "📍", title: "Adresse", value: "Malak 4 Al Izdehar, Bouskoura 20000", link: "https://www.google.com/maps/place/Zone+fitness,+Bouskora+malak4+Al+izdehar,+Bouskoura+20000/data=!4m2!3m1!1s0xda62f2b70554b3f:0xd924add9543d97a8?utm_source=mstt_1&entry=gps&lucs=47068615,,47075915&g_ep=CAESCjExLjEwMC41MDEYACCIJyoSNDcwNjg2MTUsLDQ3MDc1OTE1QgJNQQ%3D%3D" },
              { icon: "📱", title: "Mobile", value: "06 30-70 86 96" },
              { icon: "📞", title: "Téléphone", value: "05 20-91 20 47" },
              {
                icon: "🕐",
                title: "Horaires",
                value: "Ouvert 7j/7",
              },
              {
                icon: "ig",
                title: "Instagram",
                value: "@zone_fitness_bouskoura",
                link: "https://www.instagram.com/zone_fitness_bouskoura/",
              },
              {
                icon: "👥",
                title: "Facebook",
                value: "Zone Fitness Bouskoura",
                link: "https://www.facebook.com/people/Zone-Fitness-Bouskoura/100092977742914/?ref=NONE_xav_ig_profile_page_web#",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#b5cc2e]/10 border border-[#b5cc2e]/20 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon === "ig" ? (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#b5cc2e]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  ) : (
                    item.icon
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{item.title}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-[#b5cc2e] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-[#1f1f1f] border border-white/5 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Envoie-nous un message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Prénom</label>
                  <input
                    type="text"
                    placeholder="Ton prénom"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#b5cc2e] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="+212 6XX XXX XXX"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#b5cc2e] transition-colors text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="ton@email.com"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#b5cc2e] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Dis-nous comment on peut t'aider..."
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#b5cc2e] transition-colors text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#b5cc2e] hover:bg-[#a0b828] text-black font-bold py-3 rounded-xl transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
