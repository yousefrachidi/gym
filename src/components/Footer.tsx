import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Zone Fitness" width={44} height={44} className="rounded-lg" />
            <div>
              <p className="text-lg font-black">
                ZONE <span className="text-[#b5cc2e]">FITNESS</span>
              </p>
              <p className="text-gray-500 text-xs">Bouskoura, Casablanca</p>
            </div>
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#activities" className="hover:text-[#b5cc2e] transition-colors">Activités</a>
            <a href="#pricing" className="hover:text-[#b5cc2e] transition-colors">Abonnements</a>
            <a href="#coaches" className="hover:text-[#b5cc2e] transition-colors">Coaches</a>
            <a href="#contact" className="hover:text-[#b5cc2e] transition-colors">Contact</a>
          </div>

          <a
            href="https://www.instagram.com/zone_fitness_bouskoura/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#b5cc2e] transition-colors"
          >
            <span className="text-xl">📸</span>
            @zone_fitness_bouskoura
          </a>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6 text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} Zone Fitness Bouskoura. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
