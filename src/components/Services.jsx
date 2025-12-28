import {useState,useRef,useEffect} from "react"
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaRobot,
  FaSpider,
  FaBullhorn,
} from "react-icons/fa"

export default function Services() {
  const services = [
    {
      icon: <FaCode size={40} className="text-blue-400" />,
      title: "Frontend Development",
      desc: "Crafting modern, responsive UIs with React.js, Next.js, Tailwind, and smooth user experiences.",
    },
    {
      icon: <FaLaptopCode size={40} className="text-blue-400" />,
      title: "Backend Development",
      desc: "Building secure, scalable APIs using Node.js, Express, FastAPI, and robust database integration.",
    },
    {
      icon: <FaServer size={40} className="text-blue-400" />,
      title: "Full Stack Projects",
      desc: "Delivering complete web apps combining frontend, backend, and databases with clean architecture.",
    },
    {
      icon: <FaRobot size={40} className="text-blue-400" />,
      title: "AI & Machine Learning",
      desc: "Developing intelligent models for predictions, chatbots, and recommendation systems.",
    },
    {
      icon: <FaSpider size={40} className="text-blue-400" />,
      title: "Web Scraping & Automation",
      desc: "Extracting real-time data and automating workflows using Selenium, BeautifulSoup, and APIs.",
    },
    {
      icon: <FaBullhorn size={40} className="text-blue-400" />,
      title: "Digital Marketing",
      desc: "Boosting online presence with SEO, keyword research, and performance-driven campaigns.",
    },
  ]

  const[Animate,setAnimate] = useState(false)
  const sectionRef = useRef(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true);
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);


  return (
    <section id="services" className="py-20 bg-black text-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-14 text-blue-400 tracking-wide animate-fade-in-up">
          My Services
        </h2>
        <div ref={sectionRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div
                key={i}
                className={`
                  group hover:-translate-y-2
                  bg-gray-900 p-5 rounded-xl shadow-lg border border-gray-800
                  transition-all duration-700 ease-out  hover:border-blue-500 hover:shadow-blue-500/50
                  ${Animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                `}
                style={{
                  transitionDelay: `${Math.floor(i / 3) * 200}ms`,
                }}
              >
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
