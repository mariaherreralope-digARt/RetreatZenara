// components/InfoSection.tsx
import Image from 'next/image';
// aspect squeare forced 
export default function SOverlapPortfolioGhost() {
  return (
    <section className="relative bg-lighter pb-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2  items-center pt-16 md:px-10">
       

        {/* Left Box */}
        <div className="relative bg-lighter md:px-20 py-12  md:-mr-36 z-10 flex items-center justify-center">
<div className=''>
          <h3 className="oversection text-darker mb-2 ">
            Nature and Calm
          </h3>


          <h2 className="title-italic text-dark mt-7 mb-2">
            Lorem ipsum dolor sit amet
          </h2>

          <p className="paragraph text-darker mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        
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
        <div className="relative w-[700px] h-[350px] overflow-hidden -ml-26 ">
          <Image
            src="/images/collage8.png"
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
        <div className="relative md:order-last bg-lighter md:px-10 py-12  md:-mr-30 z-10 flex items-center justify-center">
<div className=''>
          <h3 className="oversection text-darker mb-2 ">
            Nature and Calm
          </h3>


          <h2 className="title-italic text-dark mt-7 mb-2">
            Lorem ipsum dolor sit amet
          </h2>

          <p className="paragraph text-darker mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        
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
            src="/images/collage6.png"
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
