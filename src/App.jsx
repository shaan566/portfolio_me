import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/projects";
import Services from "./components/services";
import Skills from "./components/skills";
import Contact from "./components/Contact"; // at the top

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;