import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80&auto=format&fit=crop"
        alt="Join us"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
          Obtiens une consultation
          <br />
          <span className="text-[#b5cc2e]">gratuite maintenant !</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
          Un de nos coaches t&apos;attend pour établir ton programme personnalisé et te guider vers tes objectifs.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#b5cc2e] hover:bg-[#a0b828] text-black font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all hover:scale-105"
        >
          Rejoindre maintenant
        </a>
      </div>
    </section>
  );
}
