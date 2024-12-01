import React, { useState } from "react";
import { IoHome, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { FaPhoneAlt, FaFigma } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  // Array of footer links with icons
  const footerLinks = [
    { name: "Home", icon: <IoHome className="inline mr-2" />, href: "#home" },
    {
      name: "About Me",
      icon: <CgProfile className="inline mr-2" />,
      href: "#about",
    },
    {
      name: "Contact",
      icon: <FaPhoneAlt className="inline mr-2" />,
      href: "#contact",
    },
  ];

  const iconBottom = [
    {
      name: "Facebook",
      href: "null",
      icon: <IoLogoFacebook className="inline mr-4 text-xl" />,
    },
    {
      name: "Instagram",
      href: "null",
      icon: <IoLogoInstagram className="inline mr-4 text-xl" />,
    },
    {
      name: "Twitter",
      href: "null",
      icon: <FaXTwitter className="inline mr-4 text-xl" />,
    },
    {
      name: "Youtube",
      href: "null",
      icon: <TbBrandYoutube className="inline mr-4 text-xl" />,
    },
  ];

  const [figmaUrl, setFigmaUrl] = useState("https://www.figma.com/design/HXP53eMsnhbGCzejpX5wrc/Portfolio-Website-Design-(Community)?node-id=25-10165&node-type=frame&t=LtAxoDEONfLz35a7-0");

  const Openfigma = () => {
    if (figmaUrl) {
      window.open(figmaUrl, "_blank");
    } else {
      console.log("Figma link is not working....");
    }
  };

  return (
    <footer className="bg-[#393e46] text-white py-6 pt-20">
      <div className="container mx-auto text-center">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center space-x-6 space-y-4 lg:space-y-0 lg:space-x-6">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-blue-400 transition duration-300 flex items-center"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-5 flex-wrap">
          {iconBottom.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition duration-300 flex item-center mb-4 lg:mb-0"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-10 text-sm">
          &copy; {new Date().getFullYear()} - AMAN KUMAR || ECE
        </p>
      </div>

      {/* Figma Link */}
      <h3
        onClick={Openfigma}
        className="text-white ml-auto mr-auto mt-4 md:mt-6 text-center cursor-pointer flex items-center justify-center"
      >
        <FaFigma className="inline mr-2" />
        Figma Link
      </h3>
    </footer>
  );
};

export default Footer;
