import { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  useGSAP(() => {
    gsap.fromTo(
      "#contactMen",
      {
        y: -300,
        opacity: 0,
        rotation: -20,
      },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: "#contactMen", // Element that triggers the animation
          start: "top 80%", // Trigger point
          toggleActions: "play reset play reset", // Replays every time it enters viewport
          // markers: true, // Optional: shows scroll trigger points for debugging
        },
      }
    );
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a FormData object
    const form = e.target;
    const formDataToSend = new FormData(form);

    // Send the form data to Web3Forms API
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Message sent successfully!");
          // Optionally, reset the form
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          alert("Failed to send the message. Please try again.");
        }
      })
      .catch((error) => {
        // console.error("Error:", error);
        alert("Sending the message.");
      });
  };

  return (
    <section id="contact">
      <div className="bg-[#1f1f2e] flex flex-wrap justify-center items-center py-10 px-5 relative">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-white text-5xl lg:text-6xl mt-14 md:mt-32 ml-0 md:ml-24 font-bold leading-snug">
            Got a project in <br />
            <span className="text-[#00adb5]">mind?</span>
          </h1>

          <img
            src="./images/pointing.svg"
            className="scale-[.8] rotate-[165deg] absolute mr-64 md:mr-0 md: md:left-24"
            alt="pointing image"
          />

          <img
            id="contactMen"
            src="./images/contactMen.svg"
            alt="Contact Illustration"
            className="ml-24 mt-10 scale-[.70] md:ml-[250px] shadow-md md:-mt-[60px] max-w-xs md:max-w-sm md:scale-[.75]"
          />
          <div
            className="bg-black w-180 h-40 -mt-[115px] rotate-90"
            style={{ clipPath: "ellipse(10px 70px)" }}
          ></div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="./images/keybord.svg"
            className="md:scale-[0.80] absolute -bottom-5 rotate-[10] right-10 md:-top-20 md:right-[250px]"
            alt="keyboard_svg"
          />
          <form
            onSubmit={handleSubmit}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="rounded-lg p-6 md:p-10 max-w-md mx-auto"
          >
            {/* Web3Forms hidden input and success redirect */}
            <input
              type="hidden"
              name="access_key"
              value="174097b8-60e5-4533-949b-079b255268ff"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />

            {/* Name and Email Fields in the same row */}
            <div className="flex flex-wrap -mx-2 mb-4">
              {/* Name Field */}
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 bg-[#393e46] py-2 text-[#eeeeee] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="w-full md:w-1/2 px-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-[#393e46] px-4 py-2 text-[#eeeeee] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message here..."
                className="w-full h-40 bg-[#393e46] text-[#eeeeee] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#00adb5] w-full md:w-[50%] text-white py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring-2 mb-24 lg-mb-0"
              >
                Send Message <FaRegPaperPlane className="inline" />
              </button>
            </div>
          </form>
        </div>
        <img
          src="./images/mail.svg"
          className="absolute md:mt-72 right-24 md:right-42"
        />
      </div>
    </section>
  );
};

export default Contact;
