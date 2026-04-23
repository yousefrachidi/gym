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
                <span className="mt-0.5">📸</span>
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
