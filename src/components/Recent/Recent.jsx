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
      img: "./images/random.png",
      name: "Random 1",
    },
    {
      img: "./images/random.png",
      name: "Random 2",
    },
    {
      img: "./images/random.png",
      name: "Random 3",
    },
  ];

  return (
    <>
      {/* Title Section */}
      <div className="relative text-center bg-[#222831]">
        <h1 className="text-5xl lg:text-6xl inline-block font-bold bg-transparent mt-24 left-20 text-white absolute">
          My recent <span className="text-[#00adb5]">work's</span>
        </h1>
        <div className="absolute mt-[220px] ml-0 md:ml-10 lg:ml-24 flex flex-wrap items-center justify-center gap-6">
          {randomImage.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-110 ml-4 bg-transparent opacity-50 backdrop-blur-md px-10 py-5 transition-all duration-300 ease-in-out"
            >
              <img
                src={item.img} // Access the `img` property for image source
                className="w-[320px] h-[240px]  md:h-[180px] md:w-[240px] object-contain"
                alt={`Recent project ${index + 1}`}
              />
              <h1 className="text-white text-xl md:text-2xl mt-2">
                {item.name}
              </h1>{" "}
              {/* Display name under image */}
            </div>
          ))}
        </div>
      </div>

      {/* Image Grid Layout */}
      <div className="bg-[#222831] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {images.map((src, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={src}
              className="h-72 w-72 object-cover rounded-lg shadow-lg"
              alt={`Recent project ${index + 1}`}
            />
            {/* <h1 className="text-white mt-4">Project {index + 1}</h1> Display name under image */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Recent;
