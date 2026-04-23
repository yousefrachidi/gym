"use client";
import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "Activités", href: "#activities" },
  { label: "Abonnements", href: "#pricing" },
  { label: "Coaches", href: "#coaches" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center">
            <Image src="/logo.jpg" alt="Zone Fitness Logo" width={52} height={52} className="rounded-lg" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-300 hover:text-[#b5cc2e] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="bg-[#b5cc2e] hover:bg-[#a0b828] text-black text-sm font-bold px-5 py-2 rounded-full transition-colors"
            >
              S&apos;inscrire
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-white/10 px-4 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-[#b5cc2e] transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="block bg-[#b5cc2e] text-black text-sm font-bold px-5 py-2 rounded-full text-center mt-2"
          >
            S&apos;inscrire
          </a>
        </div>
      )}
    </nav>
  );
}
