import React from "react";

const Recent = () => {
  const recentProjects = [
    {
      img: "./images/Parkinsion.png",
      name: "Parkinson Detection",
      link: "https://neuroinde.onrender.com/",
      tech: "Python, SuperVised ML, Numpy, Pandas, JS",
    },
    {
      img: "./images/TripThinker.png",
      name: "TripThinker",
      link: "https://1amankumar6.github.io/Trip-thinker/",
      tech: "HTML, CSS, JavaScript",
    },
    {
      img: "./images/allFile.webp",
      name: "Astro Pro",
      link: "https://github.com/1Amankumar6/Astro_Backend/",
      tech: "Node.js, Express.js, MongoDB",
    },
    {
      img: "./images/chatBot.png",
      name: "DSA ChatBot",
      link: "#",
      tech: "GenAI, React.js",
    },
    {
      img: "./images/pastePad.png",
      name: "Paste Pad",
      link: "https://pastepad-seven.vercel.app/",
      tech: "React.js, Tailwind CSS",
    },
    {
      img: "./images/GameZone.png",
      name: "GameZone",
      link: "https://1amankumar6.github.io/GameCenter/",
      tech: "HTML, CSS, JavaScript",
    },
    {
      img: "./images/Coutnry.png",
      name: "Country Explorer",
      link: "https://1amankumar6.github.io/countryExplorer/",
      tech: "HTML, CSS, JavaScript",
    },
  ];

  return (
    <section
      id="recent"
      className="relative py-16 px-4 md:px-20 bg-[#1f1f2e] text-white"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center md:text-left mb-12">
        A small selection of recent{" "}
        <span className="text-[#00adb5]">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div className="py-8 px-4">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {recentProjects.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`View project: ${item.name}`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[220px] object-contains transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                  <span className="text-sm text-[#00adb5] font-semibold mb-2">
                    {item.category || "Project"}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1 text-center">
                    {item.name}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {item.tech.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-[#00adb5]/30"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-block bg-[#00adb5] text-white px-4 py-1 rounded-full text-xs font-semibold shadow hover:bg-[#009ca1] transition-colors">
                    View Project
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recent;
