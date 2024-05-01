export default function Hero() {
  return (
    <div
      id="hero"
      className="flex mt-20  items-center justify-center gap-4 lg:gap-6 flex-col lg:flex-row p-5 max-w-screen-xl mx-auto"
    >
      <div id="hero-image" className="flex items-center justify-center ">
        <img
          className="hero_img rounded-full h-[374px] aspect-square object-fill"
          src="Orange.webp"
        />
      </div>

      <div id="hero-text" className="flex flex-col gap-2 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl ">Hi, I'm Skyler!</h1>

        <p className="text-center ">A Web Developer</p>
      </div>
    </div>
  );
}
