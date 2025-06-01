import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 px-4 py-12">
      <div className="text-center bg-white bg-opacity-30 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/40 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Mubashir</span>
        </h1>

        <TypeAnimation
          sequence={[
            'I build modern web applications',
            1500,
            'I create responsive user interfaces',
            1500,
            'I develop RESTful APIs with Node.js',
            1500,
            'I work with MongoDB and React.js',
            1500,
            'I love learning new technologies',
            1500
          ]}
          wrapper="span"
          speed={50}
          className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          repeat={Infinity}
        />
      </div>
    </section>
  );
};

export default Hero;
