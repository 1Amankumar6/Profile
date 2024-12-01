import React, { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[#222831] flex flex-wrap justify-center items-center py-10 px-5 relative">
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
          src="./images/contactMen.svg"
          alt="Contact Illustration"
          className="ml-24 mt-10 scale-[.70] md:ml-[250px] shadow-md md:-mt-[60px] max-w-xs md:max-w-sm md:scale-[.75]"
        />
        <div
          className="bg-black w-180 h-40 -mt-[115px] rotate-90"
          style={{ clipPath: "ellipse(10px 60px)" }}
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
          className="rounded-lg p-6 md:p-10 max-w-md mx-auto"
        >
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
                className="w-full px-4 bg-[#393e46] py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                className="w-full bg-[#393e46] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
              className="w-full h-40 bg-[#393e46] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
  );
};

export default Contact;

// import React, { useState } from "react";
// import { FaRegPaperPlane } from "react-icons/fa";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="bg-[#222831] flex flex-wrap justify-center items-center py-10 px-5">
//       {/* Left Section */}
//       <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
//         <h1 className="text-white text-5xl md:text-6xl mt-32 ml-24 font-bold leading-snug">
//           Got a project in <br />
//           <span className="text-[#00adb5]">mind?</span>
//         </h1>
//         <img
//           src="./images/pointing.svg"
//           className="scale-[.75] rotate-[150deg] absolute mr-64"
//           alt="poitning image"
//         />

//         <img
//           src="./images/contactMen.svg"
//           alt="Contact Illustration"
//           className="ml-[250px] shadow-md -mt-[60px] max-w-xs md:max-w-sm scale-[.75]"
//         />
//         <div
//           className="bg-black w-180 h-40 -mt-[115px] rotate-90"
//           style={{ clipPath: "ellipse(10px 60px)" }}
//         ></div>
//       </div>

//       {/* Right Section (Form) */}
//       <div className="w-full md:w-1/2">
//         <img
//           src="./images/keybord.svg"
//           className="scale-[0.80] absolute top-32 right-[100px]"
//           alt="keyborad_svg"
//         />
//         <form
//           onSubmit={handleSubmit}
//           className=" rounded-lg p-6 md:p-10 max-w-md mx-auto"
//         >
//           {/* Name and Email Fields in the same row */}
//           <div className="flex flex-wrap -mx-2 mb-4">
//             {/* Name Field */}
//             <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium  text-white mb-1"
//               >
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 className="w-full px-4 bg-[#393e46] py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 required
//               />
//             </div>

//             {/* Email Field */}
//             <div className="w-full md:w-1/2 px-2">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-white mb-1"
//               >
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 className="w-full bg-[#393e46] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 required
//               />
//             </div>
//           </div>

//           {/* Message Field */}
//           <div className="mb-4">
//             <label
//               htmlFor="message"
//               className="block text-sm font-medium text-white mb-1"
//             >
//               Your Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="5"
//               placeholder="Write your message here..."
//               className="w-full h-400 bg-[#393e46] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//               required
//             ></textarea>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="bg-[#00adb5] w-[50%] text-white py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring-2"
//             >
//               Send Message <FaRegPaperPlane className="inline" />
//             </button>
//           </div>
//         </form>
//       </div>
//       <img src="./images/mail.svg" className="-mt-40 mr-42" />
//     </div>
//   );
// };

// export default Contact;
