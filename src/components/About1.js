import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function About1() {
  const openResume = () => {
    window.open("./Pranathi_Neerudu.pdf", "_blank");
  };

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-large text-white">
            Pranathi Neerudu
          </h1>
          <p className="mb-8 leading-relaxed">
            Transforming complex problems into seamless solutions through software engineering.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg "
            >
              See My Past Work
            </a>
            <button
              className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg "
              onClick={openResume}
            >
              Resume
            </button>
          </div>
          <br />
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/pranathi-neerudu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-2" size={40} />
            </a>
            <a
              href="https://www.instagram.com/pranathineerudu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="mr-2" size={40} />
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./pic.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
