import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogoLinkedinSquare, BiMenu, BiX } from "react-icons/bi"; // Added Menu icons
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TbFileCv } from "react-icons/tb";
import { navItems } from "./Utils/navItems";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-black text-white">
        <div className="flex justify-between items-center h-16">
          
          {/* Mobile Menu Icon (Only visible on small screens) */}
          <div className="md:hidden flex items-center" onClick={() => setMenu(!menu)}>
            {menu ? <BiX size={30} /> : <BiMenu size={30} />}
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex flex-1 justify-start">
            <ul className="flex space-x-7">
              {navItems.map(({ link, text }) => (
                <li
                  className="px-5 py-2 rounded-md hover:bg-blue-600 hover:text-white duration-200 cursor-pointer"
                  key={link}
                >
                  <Link to={link}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Icons (Visible on all screens) */}
          <div className="flex items-center space-x-4">
            <a href="/Shaanresumenew11.pdf" download>
              <TbFileCv size={26} className="hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/shaan510/" target="_blank" rel="noopener noreferrer">
              <BiLogoLinkedinSquare size={26} className="hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a href="https://x.com/ch60868207" target="_blank" rel="noopener noreferrer">
              <BsTwitterX size={26} className="hover:text-blue-300 transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com/learn_code147/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={26} className="hover:text-blue-500 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {menu && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navItems.map(({ link, text }) => (
                <li
                  key={link}
                  className="text-lg font-semibold hover:text-blue-500 transition-colors"
                  onClick={() => setMenu(false)} // Close menu on click
                >
                  <Link to={link}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;