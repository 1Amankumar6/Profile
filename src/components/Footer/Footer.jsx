import { IoHome, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdWorkHistory } from "react-icons/md";

const Footer = () => {
  const footerLinks = [
    { name: "Home", icon: <IoHome className="mr-2" />, href: "/" },
    { name: "About Me", icon: <CgProfile className="mr-2" />, href: "#about" },
    {
      name: "Works",
      icon: <MdWorkHistory className="mr-2" />,
      href: "#recent",
    },
    {
      name: "Contact",
      icon: <FaPhoneAlt className="mr-2" />,
      href: "#contact",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100014808194004&mibextid=ZbWKwL",
      icon: <IoLogoFacebook className="text-2xl" />,
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/aman_kr_16/profilecard/?igsh=MWl1NHJqNm5iaTk2Zg%3D%3D",
      icon: <IoLogoInstagram className="text-2xl" />,
      color: "hover:text-pink-500",
    },
    {
      name: "Twitter",
      href: "#",
      icon: <FaXTwitter className="text-2xl" />,
      color: "hover:text-blue-300",
    },
    {
      name: "Youtube",
      href: "#",
      icon: <TbBrandYoutube className="text-2xl" />,
      color: "hover:text-red-500",
    },
  ];

  return (
    <footer className="bg-[#181826] text-white py-10 shadow-xl border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Navigation Links */}
        <nav aria-label="Footer navigation" className="mb-8">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-base font-medium transition-colors duration-200 hover:text-[#00adb5] focus:text-[#00adb5] focus:outline-none"
                  aria-label={link.name}
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`transition-transform duration-200 hover:scale-125 ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-center text-gray-400 tracking-wide">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold text-white">AMAN KUMAR</span> — All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
