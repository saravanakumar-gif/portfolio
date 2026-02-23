import React from "react";
import profileImg from "../assets/profile.png";

const HomePage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full border-4 border-indigo-500 
          shadow-[0_0_40px_rgba(99,102,241,0.6)] overflow-hidden">
            <img
              src={profileImg}
              alt="Saravanakumar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Hi, I’m <span className="text-indigo-400">Saravanakumar</span>
          </h1>

          <p className="mt-3 text-xl text-indigo-400 font-medium">
            Java Full Stack Developer | React & Spring Boot
          </p>

          <p className="mt-5 text-gray-400 max-w-lg">
            Passionate Java Full Stack Developer with hands-on experience 
            building scalable REST APIs using Spring Boot and dynamic 
            frontend applications using React. I focus on clean UI, 
            optimized performance, and scalable backend architecture.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
            >
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8 justify-center md:justify-start text-gray-400">
            <a
              href="https://github.com/saravanakumar-gif"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/saravanakumar-p-125684295/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:saravana904218@gmail.com"
              className="hover:text-indigo-400 transition"
            >
              Email
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomePage;