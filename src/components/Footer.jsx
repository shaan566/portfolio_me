import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-8 mb-8 gap-8">
          
          {/* Left Side: Brand/Name */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-blue-500">Shaan Chaudhary</h2>
            <p className="text-gray-400 max-w-xs">
              Building modern web experiences with the MERN stack and AI/ML integration.
            </p>
          </div>

          {/* Middle Side: Contact Info */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-blue-400">Get in Touch</h3>
            <a 
              href="mailto:yourname@gmail.com" 
              className="flex items-center gap-2 text-gray-400 hover:text-white transition"
            >
              <FaEnvelope className="text-blue-500" /> workingshaan@gmail.com
            </a>
            <p className="flex items-center gap-2 text-gray-400">
              <FaPhoneAlt className="text-blue-500" /> +(91) 9917715105
            </p>
          </div>

          {/* Right Side: Social Media */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 text-left md:text-right">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://leetcode.com/u/Shaanchaudhary/" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-900 p-2 rounded-lg hover:bg-blue-600 transition duration-300">
                <SiLeetcode size={20} />
              </a>
              <a href="https://x.com/ch60868207" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-900 p-2 rounded-lg hover:bg-blue-600 transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/learn_code147/?hl=en" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-900 p-2 rounded-lg hover:bg-blue-600 transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/shaan510/" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-900 p-2 rounded-lg hover:bg-blue-600 transition duration-300">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Shaan Chaudhary. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;