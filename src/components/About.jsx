import React from 'react';

function About() {
  return (
    <div
      name="About"
      /* Added py-28 to push it down from the fixed Navbar */
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-28 text-white bg-black min-h-screen"
    >
      {/* About Section */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-5 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
          A passionate <span className="font-semibold text-blue-400">MERN stack</span> &{" "}
          <span className="font-semibold text-blue-500">AI/ML developer</span>, building
          modern, responsive, and user-friendly web applications. <br /> I love turning
          ideas into real projects while sharpening my frontend skills and mastering backend integration.
        </p>
      </div>

      {/* Education Section - Removed the extra container class to fix alignment */}
      <div className="mt-20">
        <h1 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-center animate-fade-in-up">
          Education
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 animate-fade-in-up">
          {/* Box 1 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 w-full md:w-1/2 transform transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/30 border border-gray-800">
            <div className="flex flex-col items-center text-center space-y-3">
              <h3 className="text-2xl font-semibold text-blue-400">
                SGRR University, Dehradun
              </h3>
              <p className="text-lg text-gray-300">
                Master of Computer Application
              </p>
              <p className="text-sm text-gray-400">2023 - 2025</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 w-full md:w-1/2 transform transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/30 border border-gray-800">
            <div className="flex flex-col items-center text-center space-y-3">
              <h3 className="text-2xl font-semibold text-blue-400">
                M J P R University, Bareilly
              </h3>
              <p className="text-lg text-gray-300">
                Bachelor of Computer Application
              </p>
              <p className="text-sm text-gray-400">2019 - 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;