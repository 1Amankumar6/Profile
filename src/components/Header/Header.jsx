import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header
      className="sticky z-50 top-0"
      style={{ boxShadow: "0 4px 6px rgba(255, 255, 255, 0.3)" }}
    >
      <nav className="bg-[#222831] shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between py-4">
            {/* Primary menu and logo */}
            <div className="flex items-center justify-between gap-[750px]">
              <div className="">
                <Link to="" className="flex font-bold text-[#00adb5] items-center text-4xl">
                  P<span className="text-2xl text-[#eeeeee]">ortfolio</span>
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex font-semibold text-[16px] gap-8">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#00adb5]" : "text-[#eeeeee]"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#00adb5] lg:p-0`
                  }
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/aboutme"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#00adb5]" : "text-[#eeeeee]"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#00adb5] lg:p-0`
                  }
                >
                  ABOUT ME
                </NavLink>
                <NavLink
                  to="/recent"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#00adb5]" : "text-[#eeeeee]"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#00adb5] lg:p-0`
                  }
                >
                  RECENT
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#00adb5]" : "text-[#eeeeee]"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#00adb5] lg:p-0`
                  }
                >
                  CONTACT
                </NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                {toggleMenu ? (
                  <FaTimes className="h-6 scale-125 text-[#eeeeee]" />
                ) : (
                  <FaBars className="h-6 scale-125 text-[#eeeeee]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed z-40 w-full bg-gray-700 overflow-hidden flex flex-col lg:hidden gap-8 origin-top duration-700 ${
            toggleMenu ? "h-full" : "h-0"
          }`}
        >
          <div className="px-8 py-4">
            <div className="flex flex-col gap-8 font-bold tracking-wider text-gray-800">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[#00adb5]" : "text-[#eeeeee]"
                  } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#00adb5] lg:p-0`
                }
              >
                HOME
              </NavLink>
              <NavLink
                to="/aboutme"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[#00adb5]" : "text-[#eeeeee]"
                  } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#00adb5] lg:p-0`
                }
              >
                ABOUT ME
              </NavLink>
              <NavLink
                to="/recent"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[#00adb5]" : "text-[#eeeeee]"
                  } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#00adb5] lg:p-0`
                }
              >
                RECENT
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[#00adb5]" : "text-[#eeeeee]"
                  } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#00adb5] lg:p-0`
                }
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;