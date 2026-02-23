import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">
            Saravana Kumar
          </h3>
          <p className="text-sm mt-1">
            Java Full Stack Developer
          </p>
          <p className="text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right - Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/saravanakumar-gif"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/saravanakumar-p-125684295/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:saravana904218@gmail.com"
            className="hover:text-indigo-400 hover:scale-110 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;