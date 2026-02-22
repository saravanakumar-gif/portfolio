import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaGithub
} from "react-icons/fa";

import {
  
  SiPostman,SiPython,SiSpringboot
  
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: "Java", icon: <FaJava className="text-red-500 text-4xl" /> },
  {name:"SpringBoot" ,icon:<SiSpringboot className="text-green-500 text-4xl" />},
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
  { name: "MySQL", icon: <FaDatabase className="text-indigo-400 text-4xl" /> },
  {name:"GitHub",icon:<FaGithub className="text-white-600 text-4xl"/>},
  {name:"Postman",icon:<SiPostman className="text-orange-400 text-4xl"/>},
  {name:"Python",icon:<SiPython className="text-blue-400 text-4xl"/>}

];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          My <span className="text-indigo-400">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:scale-105 transition duration-300 p-6 rounded-xl shadow-md flex flex-col items-center gap-3"
            >
              {skill.icon}
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;