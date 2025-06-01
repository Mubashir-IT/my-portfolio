import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React and TailwindCSS to showcase my skills and projects.',
    tech: ['React', 'TailwindCSS'],
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://yourportfolio.vercel.app',
  },
  {
    title: 'MERN Auth System',
    description: 'A complete authentication system using MongoDB, Express, React, and Node.js.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/yourusername/mern-auth',
    live: '',
  },
  {
    title: 'Weather App',
    description: 'A weather forecast app that fetches real-time data using a weather API.',
    tech: ['React', 'API', 'CSS'],
    github: 'https://github.com/yourusername/weather-app',
    live: 'https://weatherapp-demo.vercel.app',
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-2 text-gray-900">My Projects</h2>
        <p className="text-lg text-gray-700">Here are some of the projects I've built recently.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition hover:scale-105"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-700 mb-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-sm font-medium mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black text-lg"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 text-lg"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
