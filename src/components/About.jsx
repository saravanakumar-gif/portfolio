import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-indigo-400">Me</span>
        </h2>

        <p className="text-gray-300 text-lg leading-8">
          I am a dedicated Java Full Stack Developer with hands-on experience 
          building dynamic web applications using React, Spring Boot, and MySQL. 
          I have developed real-world projects including a Health Management System 
          with complete CRUD operations and REST API integration.
          <br /><br />
          I focus on writing clean, maintainable code and designing scalable 
          backend systems. I am passionate about learning modern technologies, 
          improving problem-solving skills, and continuously enhancing my 
          development practices.
          <br /><br />
          Currently, I am seeking an entry-level opportunity where I can 
          contribute to meaningful projects and grow as a professional 
          software developer.
        </p>
      </div>
    </section>
  );
};

export default About;