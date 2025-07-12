import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Work", href: "#recent" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll detection for active link highlight
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.href.slice(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <header className="fixed top-6 w-[425px] md:w-[500px] lg:w-full z-50 flex justify-center px-4 md:px-7">
    //   <nav className="w-full max-w-5xl">
    <header className="fixed top-7 w-full z-50 flex justify-center px-4 md:px-7">
      <nav className="w-full max-w-5xl">
        {/* Desktop Nav */}
        {/* <div className="hidden md:flex justify-center items-center mx-auto bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-full px-6 py-4 w-fit">
          <ul className="flex gap-6 font-semibold text-white text-lg"> */}
        <div className="hidden md:flex justify-center items-center mx-auto bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-full px-6 py-4 w-fit">
          <ul className="flex gap-6 font-semibold text-white text-xl">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`px-5 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "text-[#00adb5] font-bold"
                      : "hover:bg-white/20"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle */}
        {/* <div className="md:hidden flex justify-between items-center px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-full">
          <span className="text-white text-lg font-bold">Portfolio</span> */}
        <div className="md:hidden flex justify-between items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-full">
          <span className="text-white text-xl font-bold">Portfolio</span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Full-Screen Mobile Menu */}
        {/* {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-[#1a1a2e]/95 backdrop-blur-md flex flex-col items-center justify-center z-40 transition-all duration-300 md:hidden"> */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-xl py-4 px-6 transition-all duration-500">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-2xl"
              aria-label="Close Menu"
            >
              <FaTimes />
            </button>
            {/* <ul className="flex flex-col gap-6 text-white text-xl font-semibold"> */}
            <ul className="flex flex-col gap-4 text-white text-base font-medium">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md transition-all ${
                      activeSection === item.href.slice(1)
                        ? "bg-[#00adb5] text-white"
                        : "hover:bg-white/20"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
