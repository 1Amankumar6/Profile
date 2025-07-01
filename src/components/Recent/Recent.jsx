import React from "react";

const Recent = () => {
  // Define the image sources in an array
  const images = [
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
    "./images/aboutBack.svg",
  ];

  const randomImage = [
    {
      img: "./images/Coutnry.png",
      name: "Country Explorer",
      link: "https://1amankumar6.github.io/countryExplorer/",
    },
    {
      img: "./images/GameZone.png",
      name: "GameZone",
      link: "https://1amankumar6.github.io/GameCenter/",
    },
    {
      img: "./images/TripThinker.png",
      name: "TripThinker",
      link: "https://1amankumar6.github.io/Trip-thinker/",
    },
  ];

  return (
    <section id="recent">
      {/* Title Section */}
      <div className="relative text-center bg-[#1f1f2e]">
        {/* <h1 className="text-5xl lg:text-6xl inline-block font-bold bg-transparent mt-24 left-9 md:left-20 text-white absolute">
          A small selection of recent <span className="text-[#00adb5]">Projects</span>
        </h1> */}
        <h1 className="text-3xl md:text-4xl lg:text-6xl inline-block font-bold text-white mt-16 md:mt-24 text-center md:text-left px-4 md:px-20">
          A small selection of recent{" "}
          <span className="text-[#00adb5]">Projects</span>
        </h1>

        <div className="absolute mt-[220px] ml-0 md:ml-10 lg:ml-24 flex flex-wrap items-center justify-center gap-6">
          {randomImage.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-110 ml-4 bg-transparent backdrop-blur-sm px-10 py-5 transition-all duration-300 ease-in-out"
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.img}
                  className="w-[320px] h-[240px]  md:h-[180px] md:w-[240px] object-contain backdrop-blur-none"
                  alt={`Recent project ${index + 1}`}
                />
              </a>
              <h1 className="text-white text-xl md:text-2xl mt-2">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Image Grid Layout */}
      <div className="bg-[#1f1f2e] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {images.map((src, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={src}
              className="h-72 w-72 object-cover rounded-lg shadow-lg"
              alt={`Recent project ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recent;
