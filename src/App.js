import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import KeyHighlight from "./components/keyHighlight";
import Projects from "./components/ProjectShow";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Awards from "./components/Awards"

const App = () => {
  return (
    <div>
      <div id="">
        <NavBar />
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div  id="Awards">
        <Awards  />
      </div>
      <div id="keyHighlight">
        <KeyHighlight />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
