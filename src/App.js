import React from "react";
import About1 from "./components/About1";
import Navbar from "./components/navbar";
import Projects1 from "./components/Projects1";
import Skills1 from "./components/Skills1";
import Contact from "./components/contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {

  return(
      <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About1 />
      <Projects1 />
      <Skills1 />
      <Experience />
      <Contact />
      <Footer />
    </main>
    );
}