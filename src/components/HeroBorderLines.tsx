// import Image from "next/image";

export default function HeroBorderLines() {
   return (
    <section className="relative bg-lighter overflow-hidden h-screen py-0">
      <div className="relative w-full mx-auto flex flex-col items-center  h-full ">
    <div
      className="w-full h-1/2 px-10 md:px-30 z-0 
      bg-[url('/images/bkgMenu.png')] bg-cover bg-center max-w-l mx-auto"
    ></div>
      <div className="relative flex flex-col items-center max-w-3xl md:max-w-4xl  bg-light -mt-28  z-10 md:px-6 py-12 h-max mx-6">
        {/* <div className="absolute inset-0  pointer-events-none before:content-[''] before:absolute before:inset-5 before:border before:border-[#d3c8af] before:pointer-events-none" /> */}
        {/* Top line */}
  <span className="absolute top-4 left-0 right-0 h-px bg-dark"></span>
  {/* Bottom line */}
  <span className="absolute bottom-4 left-0 right-0 h-px bg-dark"></span>
  {/* Left line */}
  <span className="absolute top-0 bottom-0 left-4 w-px bg-dark"></span>
  {/* Right line */}
  <span className="absolute top-0 bottom-0 right-4 w-px bg-dark"></span>
        <h2 className="title-italic text-center  text-darker">
          Introduction Goes Here
        </h2>
        <p className="paragraph text-dark text-center max-w-lg mx-auto px-12 my-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, non ea. Deleniti recusandae aliquid neque culpa rem repellat laborum. 
        </p>
        <button className="btn-squared">Learn More</button>
      </div>
      <div className="relative z-10 max-w-full md:max-w-2/3 mx-auto">
        <h2 className="heading  my-12 text-darker">
          NOT YET DEFINED
        </h2>
</div>

</div>
</section>   );
}