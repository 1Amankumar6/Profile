import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

function Home() {
  const [resumeLink, setResumeLink] = useState(
    "https://drive.google.com/file/d/1jupXhjZ4GbkKMmGqNGYfG8G46wwA-BnA/view?usp=drive_link"
  );

  // Function triggered by the button to download the resume
  const useResume = () => {
    if (resumeLink) {
      // Download logic: Open the link in a new tab
      window.open(resumeLink, "_blank");
    } else {
      console.error("Resume link is not working....");
    }
  };

  return (
    <>
      <div className="bg-[#222831] text-[#eeeeee] flex flex-col lg:flex-row justify-around px-5 py-10 lg:py-20">
      <img
          src="./images/arrow.svg"
          alt="arrowImages"
          className="hidden lg:block -mr-[25px] mt-15 scale-[.75]"
        />
        {/* Left Side Content */}
        <div className="lg:w-1/2 flex flex-col items-start mt-10 lg:mt-32">
          <h1 className="text-6xl md:text-7xl font-bold">
            A<span className="text-4xl md:text-5xl lg:text-[3.3rem]">MAN KUMAR</span>
          </h1>
          <div className="text-2xl lg:text-5xl mt-5 text-[#00adb5] font-bold">
            FINAL YEAR, <span>ECE</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col font-[700] lg:flex-row items-start mt-11 gap-5">
            <button
              className="text-xl bg-[#00adb5] text-[#eeeeee] px-4 py-2 rounded-full shadow-lg hover:bg-[#00adb5]/90"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
            >
              <Link to="/contact">Hire me</Link>
            </button>
            <button
              onClick={() => useResume()}
              aria-label="Download CV"
              className="text-xl bg-[#393e46] text-[#eeeeee] px-4 py-2 rounded-full shadow-lg hover:bg-[#393e46]/90"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
            >
              Download CV{" "}
              <MdOutlineFileDownload className="inline text-3xl text-center" />
            </button>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 scale-[.8] lg:scale-[.9]">
          <div className="relative">
            <img
              src="./images/tempBack.svg"
              alt="Background Image"
              className="lg:w-[450px] xl:w-[500px] object-cover"
            />
            <img
              src="./images/homeMen.svg"
              alt="Profile Image"
            // className="mt-[-19.5rem] ml-[-2.2rem]  rounded-full "
              className="absolute -mt-52 ml-16 scale-[1.78] lg:mt-[13.5rem] lg:ml-[-7.5rem]  lg:scale-[1.2] lg:top-[10%] lg:left-[30%] rounded-full w-[180px] h-[180px] lg:w-[250px] lg:h-[250px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;