// components/InfoSection.tsx
import Image from 'next/image';
// aspect squeare forced 
export default function Overlap2colPT() {
  return (
    <section className="relative bg-lighter py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2  items-center justify-center">
        {/* Left Image */}
        <div className="relative w-[20em] md:w-[30em] aspect-square overflow-hidden ml-20">
          <Image
            src="/images/collage5.png"
            alt="Nature Scene"
             fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right Box */}
        <div className="relative bg-dark px-20 py-10 shadow-sm ml-20 md:-ml-48 mr-20 z-10">

          <h3 className="oversection text-lighter mb-2 ">
            Nature and Calm
          </h3>

 <span className="absolute mt-2 mb-4 left-0 right-0 h-px bg-light" />
          <h2 className="title-italic text-lighter mb-4 mt-8">
            Lorem ipsum dolor sit amet
          </h2>

          <p className="paragraph text-light mb-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
            facilisis gravida neque convallis a cras semper auctor. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        
          </p>

          <button className="btn-squared">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
