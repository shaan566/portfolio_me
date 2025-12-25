import React from 'react';
import pic from "../assets/shaan11.png";
import { FaWhatsappSquare, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-28 text-white bg-black min-h-screen"
    >
      {/* MAIN ROW CONTAINER - This puts Sidebar on Left and Content on Right */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        
        {/* LEFT SIDE: Image + Socials + Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-6 md:w-1/3">
          {/* Profile Image */}
          <div className="animate-fade-in-up">
            <img
              src={pic}
              className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover shadow-2xl shadow-blue-500/50 rounded-2xl"
              alt="Profile"
            />
          </div>
          <br/><br/>

          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <ul className="flex space-x-5">
              <li>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <div className="rounded-full bg-gray-800 p-3 hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                    <FaWhatsappSquare size={24} />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shaan510/" target="_blank" rel="noopener noreferrer">
                  <div className="rounded-full bg-gray-800 p-3 hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                    <FaLinkedin size={24} />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/learn_code147/?hl=en" target="_blank" rel="noopener noreferrer">
                  <div className="rounded-full bg-gray-800 p-3 hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                    <FaSquareInstagram size={24} />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://github.com/shaan566" target="_blank" rel="noopener noreferrer">
                  <div className="rounded-full bg-gray-800 p-3 hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                    <ImGithub size={24} />
                  </div>
                </a>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="flex flex-col space-y-3 items-center md:items-start">
              <a 
                href="mailto:workingshaan@gmail.com" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition"
              >
                <FaEnvelope className="text-blue-500" /> workingshaan@gmail.com
              </a>
              <p className="flex items-center gap-2 text-gray-400">
                <FaPhoneAlt className="text-blue-500" /> +(91) 9917715105
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: About Me + Education */}
        <div className="md:w-2/3 space-y-16">
          {/* About Section */}
          <div className="text-center md:text-left space-y-5">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-fade-in-up inline-block">
              About Me
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in-up">
              A passionate <span className="font-semibold text-blue-400">MERN stack</span> &{" "}
              <span className="font-semibold text-blue-500">AI/ML developer</span>, building
              modern, responsive, and user-friendly web applications. <br /> 
              I love turning ideas into real projects while sharpening my frontend skills and mastering backend integration.
            </p>
          </div>

          {/* Education Section */}
          <div className="space-y-10">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-center md:text-left animate-fade-in-up">
              Education
            </h1>
            
            <div className="grid grid-cols-1 gap-6 animate-fade-in-up">
              {/* Box 1 */}
              <div className="bg-gray-900 rounded-2xl shadow-lg p-8 transform transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/30 border border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                  <div className="text-center md:text-left space-y-1">
                    <h3 className="text-2xl font-semibold text-blue-400">
                      SGRR University, Dehradun
                    </h3>
                    <p className="text-lg text-gray-300">
                      Master of Computer Application
                    </p>
                  </div>
                  <p className="text-sm font-mono text-gray-400 bg-gray-800 px-3 py-1 rounded-full">2023 - 2025</p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="bg-gray-900 rounded-2xl shadow-lg p-8 transform transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/30 border border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                  <div className="text-center md:text-left space-y-1">
                    <h3 className="text-2xl font-semibold text-blue-400">
                      M J P R University, Bareilly
                    </h3>
                    <p className="text-lg text-gray-300">
                      Bachelor of Computer Application
                    </p>
                  </div>
                  <p className="text-sm font-mono text-gray-400 bg-gray-800 px-3 py-1 rounded-full">2019 - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;