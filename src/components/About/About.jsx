import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="bg-[#222831] h-[800px] text-[#eeeeee] flex justify-around">
        <div>
          <img
            src="./images/music.svg"
            alt="Image_1"
            className="mt-16 inline"
          />{" "}
          <div className="mt-[3rem] text-5xl font-bold h-[586px]">
            About <span className="text-[#00adb5]">me</span>
            <img src="./images/bulb.svg" alt="bulb" className="hidden md-inline-block ml-[270px]  md:ml-10"/>
            <div>
              <div className="mt-3 w-64 text-md text-base leading-[1.2rem] font-normal">
                To work with a leading company where I can leverage my
                analytical thinking, creativity, and problem-solving skills to
                contribute meaningfully to organizational success. I aim to
                continuously grow professionally, adapt to challenges, and
                utilize my perseverance and dedication to achieve both personal
                and organizational goals while fostering innovation and
                collaboration in a dynamic work environment.........{" "}
                <Link to="/recent">

                <span className="font-bold">Read more</span>
                </Link>
                <img
                  src="./images/pointing.svg"
                  alt="Image 1"
                  className="ml-32 scale-[.60] md:mt-[1px] md:scale-75"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block mt-[100px] scale-[.6] md:scale-[.79] md:mb-56">
          <img
            src="./images/aboutBack.svg"
            alt="Image 1"
            className="mt-[130px]"
          />
          <img
            src="./images/buzz.svg"
            alt="Image 1"
            className="-mt-[270px] ml-[150px] -mb-[10px] scale-[.8] md:scale-100 md:mt-[-19.5rem] md:ml-[13rem]"
          />
          <img
            src="./images/aboutMen.svg"
            alt="Image 2"
            className="-mt-[30px] scale-[.6]  md:mt-[-0rem] md:ml-[6.2rem]"
          />
        </div>
      </div>
    </>
  );
}

export default About;
