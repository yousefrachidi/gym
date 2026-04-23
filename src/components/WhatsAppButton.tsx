"use client";

const WHATSAPP_NUMBER = "212630708696";
const WHATSAPP_MESSAGE = "Bonjour, je souhaite avoir plus d'informations sur Zone Fitness Bouskoura 💪";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />

      {/* Button */}
      <span className="relative flex w-14 h-14 rounded-full bg-[#25D366] items-center justify-center shadow-lg shadow-[#25D366]/40 transition-transform duration-300 group-hover:scale-110">
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
          <path d="M16.004 2.667C8.637 2.667 2.667 8.636 2.667 16c0 2.334.632 4.617 1.833 6.617L2.667 29.333l6.9-1.808A13.29 13.29 0 0 0 16.004 29.333C23.37 29.333 29.333 23.364 29.333 16S23.37 2.667 16.004 2.667zm0 2.4c5.96 0 10.93 4.97 10.93 10.933s-4.97 10.933-10.93 10.933a10.89 10.89 0 0 1-5.534-1.51l-.397-.236-4.097 1.073 1.095-3.994-.26-.41A10.88 10.88 0 0 1 5.07 16C5.07 10.037 10.04 5.067 16 5.067zm-3.23 5.6c-.2 0-.52.075-.793.375-.27.3-1.04 1.017-1.04 2.48s1.066 2.88 1.214 3.077c.149.2 2.063 3.278 5.07 4.467 2.508.99 3.02.793 3.565.744.545-.05 1.76-.72 2.008-1.415.248-.695.248-1.29.174-1.415-.075-.124-.274-.198-.572-.348-.298-.15-1.762-.87-2.035-.967-.273-.1-.472-.15-.67.15-.2.298-.77.967-.943 1.165-.174.198-.348.223-.646.074-.298-.149-1.257-.463-2.394-1.478-.885-.79-1.482-1.764-1.656-2.062-.174-.298-.018-.46.13-.608.134-.133.298-.348.447-.522.15-.174.2-.298.298-.497.1-.198.05-.373-.025-.522-.074-.15-.663-1.617-.912-2.21-.24-.58-.487-.497-.67-.505l-.57-.01z" />
        </svg>
      </span>

      {/* Tooltip on hover */}
      <span className="hidden sm:block absolute right-16 bottom-3 bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chatter sur WhatsApp
      </span>
    </a>
  );
}
