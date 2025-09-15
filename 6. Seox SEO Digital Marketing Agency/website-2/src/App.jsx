import React, { useEffect } from "react";
import Home from "./Components.jsx/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Components.jsx/About";
import Services from "./Components.jsx/Services";
import Choose from "./Components.jsx/Choose";
import Work from "./Components.jsx/Work";
import Clients from "./Components.jsx/Clients";
import Blogs from "./Components.jsx/Blogs";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animation happens only once
      easing: "ease-in-out", // easing
    });
  }, []);

  return (
    <div>
      <Home />
      <About/>
      <Services/>
      <Choose/>
      <Work/>
      <Clients/>
      <Blogs/>

    </div>
  );
}

