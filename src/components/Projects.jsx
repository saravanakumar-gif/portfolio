import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Hospital Management System",
    description:
      "A web application to manage patients, doctors, and appointments with CRUD operations.",
    tech: "React, Java, Spring Boot, MySQL",
    github: "https://github.com/saravanakumar-gif/health-management-frontend.git",
    live: "https://health-management-frontend-nzl6-k233cs2wq.vercel.app/login",
  },
  {
    title: "Employee Management System",
    description:
      "Full-stack Employee Management System built with React 19 + Spring Boot 4, featuring CRUD operations, REST APIs, and MySQL database.",
    tech: "React, Java,Spring Boot,MySQL",
    github: "https://github.com/saravanakumar-gif/employee-management-system.git",
    live: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-indigo-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300 text-left"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              <p className="text-sm text-indigo-300 mb-4">
                Tech Stack: {project.tech}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <FaGithub /> GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;