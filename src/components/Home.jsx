import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import pic1 from "../assets/shaan12.png";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";
import { RiTwitterXFill } from "react-icons/ri";


function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20  bg-black text-white"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 animate-fade-in-up">
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm  Shaan </h1>
            </div>
            <div>
              <h1 className="large-text text-6xl">
                <ReactTyped
                  className="text-blue-500 font-bold"
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop={true}
                />
              </h1>
            </div>
            <br />
            <p className="text-l md:text-md text-justify">
              "Welcome! This is my space to share my coding projects, experiments, and small creative solutions. I am learning new technologies every day and turning ideas into simple, user-friendly applications. Here, I am growing as a web developer and improving my coding skills step by step."
            </p>
            <br />
            <br />
            <div className="mb-10">
              <Link
                to="/projects" // scrolls to Projects section
                className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 mr-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 inline-block"
              >
                View my works
              </Link>

              <Link
                to="/contact" // scrolls to Contact section
                className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 inline-block"
              >
                Get in touch
              </Link>
            </div>

            <br />
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 -translate-y-5">
              <div className="space-y-2">
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://x.com/ch60868207" target="_blank" rel="noopener noreferrer">
                      <div className="rounded-full bg-gray-800 p-3 hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                        <RiTwitterXFill size={24} />
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
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 flex justify-center items-center animate-fade-in-up">
            <img
              src={pic1}
              className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover shadow-2xl shadow-blue-500/50"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;