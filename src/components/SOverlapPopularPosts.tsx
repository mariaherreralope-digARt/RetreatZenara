import Image from "next/image";
export default function OverlapPopularPosts() {
  return (
    <section className="relative h-auto pb-16 bg-lighter flex flex-col items-center pt-16">
    <div className="relative  flex flex-col items-center justify-center px-16 pt-16 w-full">
      <h2 className="heading  text-dark mb-6">Popular Posts</h2>
<div className="relative grid md:grid-cols-2 gap-10 py-4">
  <div className="relative flex items-center justify-center mb-12 md:mb-0">
    <Image
      src="/images/collage7.png"
      alt="Popular Post 1"
      width={300} 
      height={150}

  />
    <div className="absolute bg-light py-4 px-6 flex flex-col items-center self-end -mb-8">
      <h3 className="title-italic-boxed not-italic mb-4 text-dark">Exploring the Soul</h3>
      <button className=" btn-squared ">Learn More</button>
    </div>
  </div>
   <div className="relative flex items-center justify-center">
    <Image
      src="/images/collage8.png"
      alt="Popular Post 1"
      width={300} 
      height={150}

  />
    <div className="absolute bg-light py-4 px-6 flex flex-col items-center self-end -mb-8">
      <h3 className="title-italic-boxed not-italic mb-4 text-dark">Exploring The Body</h3>
      <button className=" btn-squared ">Learn More</button>
    </div>
  </div>
</div>
    </div>
    </section>
  )
}