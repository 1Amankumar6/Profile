import { useState } from "react";
import {
  IoHome,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdWorkHistory } from "react-icons/md";

const Footer = () => {
  const footerLinks = [
    { name: "Home", icon: <IoHome className="mr-2" />, href: "/" },
    { name: "About Me", icon: <CgProfile className="mr-2" />, href: "#about" },
    { name: "Works", icon: <MdWorkHistory className="mr-2" />, href: "#recent" },
    { name: "Contact", icon: <FaPhoneAlt className="mr-2" />, href: "#contact" },
  ];

  const iconBottom = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100014808194004&mibextid=ZbWKwL",
      icon: <IoLogoFacebook className="text-xl hover:text-blue-500" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/aman_kr_16/profilecard/?igsh=MWl1NHJqNm5iaTk2Zg%3D%3D",
      icon: <IoLogoInstagram className="text-xl hover:text-pink-500" />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: <FaXTwitter className="text-xl hover:text-blue-300" />,
    },
    {
      name: "Youtube",
      href: "#",
      icon: <TbBrandYoutube className="text-xl hover:text-red-500" />,
    },
  ];

  const [figmaUrl] = useState(
    "https://www.figma.com/design/HXP53eMsnhbGCzejpX5wrc/Portfolio-Website-Design-(Community)?node-id=25-10165&node-type=frame&t=LtAxoDEONfLz35a7-0"
  );

  const Openfigma = () => {
    if (figmaUrl) {
      window.open(figmaUrl, "_blank");
    } else {
      alert("Figma link is not available.");
    }
  };

  return (
    <footer className="bg-[#181826] text-white py-10">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-1 hover:text-[#00adb5] transition-all duration-300"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {iconBottom.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition duration-300 hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Optional Figma Link */}
        {/* <div className="text-sm text-center mb-4">
          <button
            onClick={Openfigma}
            className="flex items-center justify-center text-[#00adb5] hover:text-white transition"
          >
            <FaFigma className="mr-2" />
            View Figma Design
          </button>
        </div> */}

        {/* Copyright */}
        <p className="text-xs p-2 text-gray-400">
          &copy; {new Date().getFullYear()} AMAN KUMAR — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
