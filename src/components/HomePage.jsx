import React from "react";
import profileImg from "../assets/profile.png";
import resumeFile from "../assets/resume.pdf";

const HomePage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full border-4 border-indigo-500 overflow-hidden bg-black">
              <img
                src={profileImg}
                alt="Saravanakumar"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Hi, I’m <span className="text-indigo-400">Saravanakumar</span>
          </h1>

          <p className="mt-3 text-xl text-gray-300">
            Full Stack Developer
          </p>

          <p className="mt-5 text-gray-400 max-w-lg">
            I build modern, responsive web applications using Java, React,
            Spring Boot, and CSS. I focus on clean UI and scalable
            backend systems.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href={resumeFile}
              
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition"
            >
              View Resume
            </a>

            <a
              href={resumeFile}
              download 
              className="px-6 py-3 border border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomePage;
