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
          I am a passionate Full Stack Developer with strong knowledge in Java,
          React, and web technologies. As a fresher, I focus on writing clean,
          maintainable code and building real-world projects to improve my
          skills.
          <br /><br />
          I enjoy learning new technologies and solving problems through
          practical implementation. I am looking for an opportunity to start my
          career and grow as a software developer in a professional environment.
        </p>
      </div>
    </section>
  );
};

export default About;