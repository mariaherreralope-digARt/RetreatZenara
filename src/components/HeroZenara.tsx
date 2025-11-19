import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-light overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative">
        {/* Label */}
        <p className="oversection text-dark mb-0 z-0">
          Return to Yourself
        </p>

        {/* Large centered headline scale-y-120 tracking-[0.07em] uppercase md:text-[10rem]*/}
        <h1 className="text-[6rem] sm:text-[8rem] md:text-[18rem] font-serif font-light text-dark/70  transform leading-none -tracking-[0.05em] z-30 -mt-12">
          zenara
        </h1>

       <div className="relative grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center gap-4 -mt-16 z-10 w-full max-w-6xl">
          {/* Left image */}
          <div className="relative w-48 h-48 md:w-48 md:h-48 bg-lighter overflow-hidden justify-self-end">
            <Image
              src="/images/collage6.png"
              alt="Best selling wellness retreat"
              fill
              className="object-cover"
            />
          </div>

          {/* Center image */}
          <div className="relative w-56 h-72 md:w-72 md:h-92  overflow-hidden justify-self-center">
            <Image
              src="/images/collage5.png"
              alt="Wellness retreat experience"
              fill
              className="object-cover"
            />
          </div>

          {/* Right text block */}
          <div className="text-left justify-self-start w-48 md:w-52 md:h-48 flex flex-col justify-center">
            <h2 className="title text-dark mb-4">
            Where Stillness Becomes Strength
          </h2>
            <p className="paragraph text-darker font-semibold mb-4">
              A place to reconnect with your body, mind, and soul. 
            </p>
            <button className="btn-squared self-start">
              Explore Retreats
            </button>
          </div>
        </div>
      </div>

       

      {/* Optional subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-darker/20 to-lighter pointer-events-none" />
    </section>
  );
}
