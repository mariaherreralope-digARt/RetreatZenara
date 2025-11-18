import Image from "next/image";

export default function HeroHugeTextBottom() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background image */}
      <Image
        src="/images/bkgMenu.png"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* <div className="relative z-10 flex items-center justify-center h-full">
      </div> */}

      {/* HUGE Text at bottom */}
      <h1 className="absolute bottom-30 md:bottom-0 left-1/2 -translate-x-1/2 z-10 scale-y-425
      md:scale-y-125 font-heading tracking-tighter leading-[0.90] text-lighter/70
      text-[20vw] pointer-events-none select-none uppercase">
        inspiring
      </h1>
    </section>
  );
}
