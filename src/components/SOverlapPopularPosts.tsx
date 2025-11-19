import Image from "next/image";
export default function OverlapPopularPosts() {
  return (
    <section className="relative h-auto pb-16 bg-lighter flex flex-col items-center pt-16">
      {/* title */}
       <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
         <p className="oversection text-darker mb-6">
          Our Spaces
        </p>
        <h2 className="heading text-dark md:text-3xl  mb-6">
          A Space to Breathe Again
        </h2>
        <p className="text-darker mb-8 paragraph leading-relaxed font-semibold">
          Every space at Zenara is created to support presence, calm, and deep inner rest. Nature holds you, the environment softens you, and the atmosphere gently opens you.
       
        </p>
        </div>
        {/* first row */}
    <div className="relative  flex flex-col items-center justify-center px-0 md:py-4 max-w-6xl mx-auto">

<div className="relative grid md:grid-cols-2 gap-8 md:pb-8 max-w-6xl mx-auto">
  {/* left */}
  <div className="relative flex items-center justify-center mb-0 md:mb-0 md:w-[40vw]">
   <div className="relative w-full aspect-[16/9] overflow-hidden ">
  <Image 
    src="/images/collage6.png"
    alt="Popular Post 1"
    fill
    className="object-cover"
  />
</div>
    <div className="bg-light py-4 px-6 flex flex-col items-center text-center 
            mt-4 md:absolute md:self-end md:-mb-8 md:mx-8">

      <h3 className="title-italic-boxed not-italic mb-4 text-dark">Nature Surroundings</h3>
      <p className="paragraph pb-4 text-center text-dark">Quiet trails, open landscapes, and grounding natural beauty that reconnect you with the earth.</p>
      <button className=" btn-squared ">Learn More</button>
    </div>
  </div>
  {/* right */}
 <div className="relative flex items-center justify-center mb-12 md:mb-0 md:w-[40vw]">
  <div className="relative w-full aspect-[16/9] overflow-hidden ">
  <Image 
    src="/images/collage2.png"
    alt="Popular Post 1"
    fill
    className="object-cover"
  />
</div>
    <div className="bg-light py-4 px-6 flex flex-col items-center text-center 
            mt-4 md:absolute md:self-end md:-mb-8 md:mx-8">

      <h3 className="title-italic-boxed not-italic mb-4 text-dark">Accommodation</h3>
      <p className="paragraph pb-4 text-center text-dark">Calming, minimalist rooms designed for rest, comfort, and gentle nervous-system reset.</p>
      <button className=" btn-squared ">Learn More</button>
    </div>
  </div>
</div>
    </div>
    {/* second row */}
    <div className="relative  flex flex-col items-center justify-center px-0 py-4 max-w-6xl mx-auto">

<div className="relative grid md:grid-cols-2 gap-8 pb-8 max-w-6xl mx-auto">
  {/* left */}
  <div className="relative flex items-center justify-center mb-0 md:mb-0 md:w-[40vw]">
   <div className="relative w-full aspect-[16/9] overflow-hidden ">
  <Image 
    src="/images/collage8.png"
    alt="Popular Post 1"
    fill
    className="object-cover"
  />
</div>
    <div className="bg-light py-4 px-6 flex flex-col items-center text-center 
            mt-4 md:absolute md:self-end md:-mb-8 md:mx-8">

      <h3 className="title-italic-boxed not-italic mb-4 text-dark">Community Spaces</h3>
      <p className="paragraph pb-4 text-center text-dark">Warm gathering areas for connection, workshops, and meaningful shared moments.</p>
      <button className=" btn-squared ">Learn More</button>
    </div>
  </div>
 <div className="relative flex items-center justify-center mb-12 md:mb-0 md:w-[40vw]">
    <div className="relative w-full aspect-[16/9] overflow-hidden ">
  <Image 
    src="/images/luxury.png"
    alt="Popular Post 1"
    fill
    className="object-cover"
  />
</div>
    <div className="bg-light py-4 px-6 flex flex-col items-center text-center 
            mt-4 md:absolute md:self-end md:-mb-8 md:mx-8">

      <h3 className="title-italic-boxed not-italic mb-4 text-dark">Healing Rooms</h3>
      <p className="paragraph pb-4 text-center text-dark">Still, peaceful spaces for meditation, breathwork, and transformative inner work.</p>
      <button className=" btn-squared ">Learn More</button>
    </div>
  </div>
</div>
    </div>
    </section>
  )
}