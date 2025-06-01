import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-2xl" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-500 text-2xl" /> },
  { name: 'React', icon: <FaReact className="text-blue-400 text-2xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-2xl" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-700 text-2xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700 text-2xl" /> },
];

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 px-6 py-20 text-gray-800">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Bio */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">About Me</h2>
          <p className="text-lg mb-4">
            I'm <span className="text-blue-600 font-semibold">Mubashir Ali Hassan</span>, a passionate
            <span className="text-purple-600 font-semibold"> Full Stack Developer</span> who recently graduated and enjoys building modern, scalable web applications.
          </p>
          <p className="text-gray-700 mb-8">
            I specialize in MERN stack — React, Node.js, Express, and MongoDB. I love clean code and building smooth user experiences.
          </p>

          {/* Typing Animation */}
          <div className="bg-white bg-opacity-30 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-white/40 text-center">
            <TypeAnimation
              sequence={[
                'I create responsive user interfaces',
                1500,
                'I build modern web applications',
                1500,
                'I develop RESTful APIs with Express and Node.js',
                1500,
                'I work with MongoDB and React.js',
                1500,
                'I love learning new technologies',
                1500
              ]}
              wrapper="span"
              speed={50}
              className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              repeat={Infinity}
            />
          </div>
        </div>

        {/* Right: Skills with Icons */}
        <div className="grid grid-cols-2 gap-4 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 bg-white/60 backdrop-blur-md py-4 px-3 rounded-xl shadow-md hover:scale-105 transition font-medium"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
