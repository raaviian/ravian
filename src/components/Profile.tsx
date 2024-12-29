import React from "react";
import profilePic from "../assets/profilepic.jpg";

const Hero: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="about"
        className="h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-gray-800 to-black text-white p-4"
      >
        <div className="text-center md:text-left md:mr-8">
          <h1 className="text-4xl md:text-6xl font-bold">Raviansyah Noorman</h1>
          <p className="mt-4 text-lg md:text-xl">
            Fullstack Software Developer, Based in Kuala Lumpur
          </p>
          <a
            href="#portfolio"
            className="mt-6 inline-block bg-white text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-200"
          >
            View My Work
          </a>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src={profilePic}
            alt="Hero Image"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech-stack"
        className="py-16 bg-white text-gray-900 text-center"
      >
        <h3 className="text-2xl font-semibold mb-12">Technologies I Work With</h3>
        <div className="flex justify-center items-center gap-10">
          {/* JavaScript */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="h-16 w-16"
          />

          {/* React */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="h-16 w-16"
          />

          {/* Angular */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
            alt="Angular"
            className="h-16 w-16"
          />

          {/* TypeScript */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            className="h-16 w-16"
          />

          {/* Node.js */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="h-16 w-16"
          />

          {/* Tailwind CSS */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            alt="Tailwind CSS"
            className="h-16 w-16"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
