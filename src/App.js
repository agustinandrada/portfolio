import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="site-bg grain relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Header />
        <Banner />
        <Nav />
        <About />
        <Work />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
