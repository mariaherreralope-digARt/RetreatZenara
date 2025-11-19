// components/InfoSection.tsx
import Image from 'next/image';
// aspect squeare forced 
export default function SOverlapPortfolioGhost() {
  return (
    <section className="relative bg-gradient-to-b from-transparent via-light/50 to-lighter md:pb-16">
        <div className="flex flex-col items-center text-center px-16 sm:px-6 lg:px-8 max-w-4xl mx-auto">
         <p className="oversection text-darker mb-6">
          Upcoming Retreats
        </p>
        <h2 className="heading text-dark md:text-3xl  mb-6">
          Your Next Journey Awaits
        </h2>
        <p className="text-darker mb-8 paragraph leading-relaxed font-semibold">
         Step into a space of presence, calm, and transformation. Each retreat is designed to help you reconnect with yourself and the world around you.
       
        </p>
        </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2  items-center pt-16 md:px-10">
       

        {/* Left Box */}
        <div className="relative bg-lighter px-16 md:px-20 py-12  md:-mr-36 z-10 flex items-center justify-center">
<div className=''>
          <h3 className="oversection text-darker mb-2 ">
            Mindful Living
          </h3>


          <h2 className="title-italic text-dark mt-7 mb-2">
            Zenara Soul Weekend
          </h2>

          <p className="paragraph text-darker mb-6">
            A 3-day immersive experience to explore mindfulness, meditation, and inner clarity.
          </p>
          <p className="paragraph text-darker mb-6">
            Reconnect with your intuition and awaken your deeper self.        
          </p>
          </div>
          <div className=''>
          <span className="absolute right-10 top-1/2 -translate-y-1/2  text-btt text-3xl">→</span></div>
{/* 
          <button className="bg-[#a6b39d] text-white px-6 py-2 text-sm tracking-wide uppercase">
            Read More
          </button> */}
        </div>
         {/* Right Image */}
        <div className="relative w-[700px] h-[350px] overflow-hidden md:-ml-42 ">
          <Image
            src="/images/collage9.png"
            alt="Nature Scene"
             fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2  items-center py-20 md:px-10">
       

        {/* Left Box */}
        <div className="relative md:order-last bg-lighter px-16 md:px-10 py-12  md:-mr-30 z-10 flex items-center justify-center">
<div className=''>
          <h3 className="oversection text-darker mb-2 ">
           Nature and Stillness 
          </h3>


          <h2 className="title-italic text-dark mt-7 mb-2">
            Zenara Deep Rest Retreat
          </h2>

          <p className="paragraph text-darker mb-6 mr-6">
            A restorative retreat focused on silence, slow living, and nervous-system reset. 
        
          </p>
          <p className="paragraph text-darker mb-6">
            Perfect for releasing stress and leaving grounded and rejuvenated. 
        
          </p>
          </div>
          <div className=''>
          <span className="absolute right-10 top-1/2 -translate-y-1/2  text-btt text-3xl">→</span></div>
{/* 
          <button className="bg-[#a6b39d] text-white px-6 py-2 text-sm tracking-wide uppercase">
            Read More
          </button> */}
        </div>
         {/* Left Image */}
        <div className="relative w-[700px] h-[350px] overflow-hidden  ">
          <Image
            src="/images/body.png"
            alt="Nature Scene"
             fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
