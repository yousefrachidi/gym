import Image from "next/image";

const INSTAGRAM = "https://www.instagram.com/zone_fitness_bouskoura/";
const FACEBOOK = "https://www.facebook.com/people/Zone-Fitness-Bouskoura/100092977742914/?ref=NONE_xav_ig_profile_page_web#";
const MAPS = "https://www.google.com/maps/place/Zone+fitness,+Bouskora+malak4+Al+izdehar,+Bouskoura+20000/data=!4m2!3m1!1s0xda62f2b70554b3f:0xd924add9543d97a8?utm_source=mstt_1&entry=gps&lucs=47068615,,47075915&g_ep=CAESCjExLjEwMC41MDEYACCIJyoSNDcwNjg2MTUsLDQ3MDc1OTE1QgJNQQ%3D%3D";

const company = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Activités", href: "#classes" },
  { label: "Coaches", href: "#trainers" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];
const categories = ["Musculation", "Boxing", "Cardio", "Yoga", "Crossfit", "Fitness Kids"];

const socials = [
  { label: "f", title: "Facebook", href: FACEBOOK },
  { label: "ig", title: "Instagram", href: INSTAGRAM },
  { label: "📍", title: "Google Maps", href: MAPS },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.jpg" alt="Zone Fitness" width={44} height={44} className="rounded-lg" />
              <span className="text-lg font-black">ZONE <span className="text-[#b5cc2e]">FITNESS</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Musculation · CrossFit · Arts Martiaux. Dépassez vos limites avec nous. Espaces 100% femmes &amp; 100% hommes. Ouvert 7j/7.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} title={s.title} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-[#b5cc2e] hover:bg-[#b5cc2e] flex items-center justify-center text-xs font-bold text-gray-400 hover:text-black transition-all">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-5">Navigation</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 text-sm hover:text-[#b5cc2e] transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="text-white font-bold mb-5">Activités</h4>
            <ul className="space-y-3">
              {categories.map((item) => (
                <li key={item}>
                  <a href="#classes" className="text-gray-400 text-sm hover:text-[#b5cc2e] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5">Contactez-nous</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <span className="mt-0.5">📱</span>
                <span>06 30-70 86 96</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <span className="mt-0.5">📞</span>
                <span>05 20-91 20 47</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-[#b5cc2e] transition-colors">
                  @zone_fitness_bouskoura
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <span className="mt-0.5">👥</span>
                <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="hover:text-[#b5cc2e] transition-colors">
                  Zone Fitness Bouskoura
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <span className="mt-0.5">📍</span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-[#b5cc2e] transition-colors">
                  Malak 4 Al Izdehar, Bouskoura
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <span className="mt-0.5">🕐</span>
                <span>Ouvert 7j/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Zone Fitness Bouskoura. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-[#b5cc2e] transition-colors">Instagram</a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="hover:text-[#b5cc2e] transition-colors">Facebook</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-[#b5cc2e] transition-colors">Google Maps</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
