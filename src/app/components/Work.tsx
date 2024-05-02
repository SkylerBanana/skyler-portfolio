export default function Work() {
  const projects = [
    { name: "Pokemon Web Game", url: "#", img: "pokemon game.webp" },
    { name: "Work", url: "#", img: "pokemon game.webp" },
    { name: "Contact", url: "#", img: "pokemon game.webp" },
  ];

  return (
    <>
      <div
        id="Work-Container"
        className="md:p-10 p-3 pt-10 md:pt-0  mx-auto text-center lg:text-start "
      >
        <h1 className="text-5xl">Work.</h1>
        <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-6 md:p-10">
          {projects.map((project, index) => (
            <div key={index} className=" max-w-screen-xl mx-auto">
              <div className="relative flex items-center justify-center">
                <img className=" rounded-lg" src={project.img}></img>

                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300  rounded-lg flex justify-center items-center ">
                  <button className="text-sky-800 bg-white py-3 px-4 md:py-4 md:px-6 rounded-lg absolute inset-y-1/2 z-20 flex items-center  ">
                    Learn More
                  </button>
                </div>
              </div>

              <h3 className="text-center">{project.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
