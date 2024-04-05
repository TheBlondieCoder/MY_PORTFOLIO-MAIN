import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // adjust the path as necessary
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  const [isDaytime, setIsDaytime] = useState(
    new Date().getHours() > 6 && new Date().getHours() < 18
  );

  const toggleDayNight = () => {
    setIsDaytime(!isDaytime);
  };

  return (
    <main className="bg-slate-300/20 h-[100vh]">
      <Router>
        <Navbar
          handleThemeChange={toggleDayNight}
          theme={isDaytime ? "day" : "night"}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
