import { useState } from "react";
import { BsSearch, BsGithub } from "react-icons/bs";

export default function Projects() {
  const [search, setSearch] = useState("");

  const project = [
    {
      title: "Attendance Management System",
      desc: "AMS (Attendance Management System 90) is a Python/MySQL-based project designed to manage student and employee attendance.",
      github: "https://github.com/shaan566/AMS_attendence_mangementsystem90",
    },
    {
      title: "Real-time Cricket Data Scraping System",
      desc: "This project scrapes live cricket data from crex.live and displays it using Flask.",
      github: "https://github.com/shaan566/Real-time-Cricket-Data-Scraping-System",
    },
    {
      title: "ChatBot with PDF Support",
      desc: "React-based chatbot powered by OpenAI/Gemini API with PDF upload support.",
      github: "https://github.com/shaan566/PDF_REDER_-1111",
    },
  ];

  return (
    <section id="project" className="py-20 bg-black animate-fade-in-up text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
          <h2 className="text-5xl font-bold mb-12 text-center text-blue-400">
          Projects
        </h2>

        {/* Search Bar */}
        <div className="flex w-full sm:max-w-sm mb-10 sm:mb-12">
          <input
            className="h-11 sm:h-12 flex-grow bg-gray-900 border border-gray-700 px-4 rounded-l-md focus:outline-none text-sm sm:text-base"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
          />
          <button className="h-11 sm:h-12 px-4 sm:px-6 bg-blue-600 rounded-r-md flex items-center justify-center hover:bg-blue-500 transition">
            <BsSearch size={18} />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {project
            .filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 bg-gray-900 rounded-2xl shadow-lg border border-gray-800
                           hover:border-blue-500 hover:shadow-blue-500/50
                           transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
                  {item.desc}
                </p>

                {/* GitHub Button */}
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" mt-auto w-[120px]  inline-flex items-center gap-2 px-4 py-2 text-sm sm:text-base bg-blue-600 rounded-lg hover:bg-blue-500 transition"
                >
                  {/* <BsGithub /> */}
                  View Work
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
