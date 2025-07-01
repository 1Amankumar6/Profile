// #222831 -> proper color
import { FaAward, FaGraduationCap, FaCode } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    type: "education",
    title: "B.Tech in Electronics and Communication Engineering",
    place: "Academy of Technology, West Bengal",
    duration: "2021 - 2025",
    description:
      "Focused on software engineering, data structures, web technologies, and databases. Actively participated in coding contests and project development.",
  },
  {
    type: "education",
    title: "Senior Secondary (12th) - CBSE",
    place: "R.P.S School",
    duration: "2019 - 2021",
    description:
      "Specialized in PCM (Physics, Chemistry, Mathematics). Scored 68.4% and participated in science exhibitions and computer clubs.",
  },
  {
    type: "education",
    title: "Secondary (10th) - CBSE",
    place: "Sri Chaitanya Vidya Niketan",
    duration: "2016 - 2019",
    description:
      "Achieved 76.4% CGPA. Built strong fundamentals in math, science, and computers.",
  },
  {
    type: "achievement",
    title: "Top 880 - Naukri Young Turks",
    place: "Naukri Campus Event",
    duration: "2024",
    description:
      "Secured an All India Rank of 880 out of over 500,000 participants.",
  },
  {
    type: "achievement",
    title: "TCS CodeVita",
    place: "TCS CodeVita",
    duration: "2024",
    description:
      "Achieved a global rank of 1340 in one of the coding competitions, demonstrating strong problem-solving skills under pressure.",
  },
];

const skills = [
  "Java",
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git & GitHub",
  "MySQL",
  "SQL Server",
];

const Journey = () => {
  useGSAP(() => {
    gsap.from(".skill-box", {
      x: 10, // 🡠 From left to right
      opacity: 1,
      stagger: 0.2,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top 80%",
        toggleActions: "play reset play reset", // Plays every time it enters viewport
      },
    });
  }, []);

  return (
    <section
      id="journey"
      className="bg-[#1f1f2e] text-white py-20 px-6 md:px-16"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        <FaAward className="inline-block text-[#00adb5] mr-2" />
        My <span className="text-[#00adb5]">Journey</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Skills Section */}
        <div className="text-center skills-section">
          <h3 className="text-3xl font-bold mb-8">
            <FaCode className="inline-block text-[#00adb5] mr-2" />
            My <span className="text-[#00adb5]">Skills</span>
          </h3>

          <div className="skill-box grid grid-cols-2 lg:grid-cols-1 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-[#292940] border border-[#3a3a5a] text-[#00adb5] lg:text-lg py-3 px-4 rounded-lg shadow-md hover:text-white transition duration-300 lg:w-[280px] lg:mx-auto"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative border-l-4 border-[#00adb5] pl-6 space-y-12">
          {journeyData.map((item, index) => (
            <div key={index} className="relative pl-6">
              <span className="absolute w-5 h-5 bg-[#00adb5] border-2 border-white rounded-full left-[-34px] top-3" />

              <div className="bg-[#292940] border border-[#3a3a5a] rounded-lg p-5 shadow-lg hover:scale-[1.02] transition-all duration-300">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block ${
                    item.type === "education"
                      ? "bg-blue-600 text-white"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {item.type === "education" ? (
                    <>
                      <FaGraduationCap className="inline mr-1" /> Education
                    </>
                  ) : (
                    <>
                      <FaAward className="inline mr-1" /> Achievement
                    </>
                  )}
                </span>

                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <p className="text-[#00adb5] font-medium">{item.place}</p>
                <p className="text-sm italic text-gray-400">{item.duration}</p>
                <p className="mt-2 text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
