// 222831 -> color code

import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.fromTo(
      "#tableMen",
      {
        y: -300,
        opacity: 0,
        rotation: -20,
        repeat: -1,
      },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: "#tableMen",
          start: "top 80%", // When the top of #tableMen hits 80% of viewport
          toggleActions: "restart none none none", // Only plays once
        },
      }
    );
  }, []);
  return (
    <section id="about">
      <div className="bg-[#1f1f2e] text-[#eeeeee] min-h-screen px-6 py-12">
        {/* About Section */}
        <div className="flex flex-col md:flex-row justify-around items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center max-w-xl">
            <img
              src="./images/music.svg"
              alt="Music Icon"
              className="w-20 h-20 mb-6"
            />

            <h1 className="text-5xl font-bold mb-4">
              About <span className="text-[#00adb5]">me</span>
              <img
                src="./images/bulb.svg"
                alt="bulb"
                className="inline-block w-10 ml-4"
              />
            </h1>

            <p className="mt-3 text-base leading-relaxed font-normal">
              Hi, I'm{" "}
              <span className="text-teal-400 font-bold text-xl">
                Aman Kumar
              </span>{" "}
              — or just Aman! I'm an aspiring full-stack software engineer with
              a strong passion for building modern, user-friendly web
              applications. As a fresher, I’ve worked on several personal and
              academic projects that showcase my skills in React and Node.js. I
              enjoy learning new technologies, solving real-world problems
              through code, and continuously improving my development workflow.
              I'm particularly drawn to creating clean, aesthetic, and
              responsive user interfaces that leave a lasting impact. Currently,
              I’m focused on strengthening my full-stack development skills and
              exploring innovative tools that help deliver dynamic and engaging
              user experiences. I'm eager to contribute to meaningful projects
              and grow alongside a collaborative team.
              <Link to="/education">
                <span className="font-bold ml-1 hover:underline text-[#00adb5]">
                  Read more
                </span>
              </Link>
            </p>

            <img
              src="./images/pointing.svg"
              alt="Pointer"
              className="w-24 mt-4 self-end md:ml-32"
            />
          </div>

          {/* Right Image */}
          <div className=" md:block relative mt-12">
            <img
              src="./images/aboutBack.svg"
              alt="Background Design"
              className="w-[400px] mt-8"
            />
            <img
              src="./images/buzz.svg"
              alt="Buzz Icon"
              className="absolute top-[3rem] left-[10rem] w-20"
            />
            <img
              id="tableMen"
              src="./images/aboutMen.svg"
              alt="Man Illustration"
              className="absolute top-[125px] left-[5rem] w-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
