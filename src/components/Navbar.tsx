"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Activités", href: "#classes" },
  { label: "Coaches", href: "#trainers" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#111111]/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center">
            <Image src="/logo.jpg" alt="Zone Fitness" width={56} height={56} className="rounded-xl" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-300 hover:text-[#b5cc2e] transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="bg-[#b5cc2e] hover:bg-[#a0b828] text-black text-sm font-bold px-6 py-2.5 rounded-lg transition-colors">
              S&apos;inscrire
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#111111] border-t border-white/10 px-4 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-300 hover:text-[#b5cc2e] transition-colors py-2 border-b border-white/5">
              {l.label}
            </a>
          ))}
          <a href="#pricing" onClick={() => setOpen(false)} className="block bg-[#b5cc2e] text-black text-sm font-bold px-5 py-3 rounded-lg text-center mt-3">
            S&apos;inscrire
          </a>
        </div>
      )}
    </nav>
  );
}
