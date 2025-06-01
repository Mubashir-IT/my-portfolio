import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { TypeAnimation } from 'react-type-animation';



const Home = () => {
  return (
    <>
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 text-gray-900 px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
        Hello, I'm <span className="text-blue-600">Mubashir Ali Hassan</span>
      </h1>

      <p className="text-lg md:text-xl max-w-xl mb-8 text-gray-700">
        A <span className="text-purple-600 font-semibold">Full Stack Developer</span> crafting modern, responsive, and performant web applications.
      </p>

      

      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/projects"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transform transition inline-flex items-center gap-2"
        >
          View Projects <FaArrowRight />
        </Link>
        <Link
          to="/contact"
          className="border border-blue-500 text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-50 transition inline-flex items-center gap-2"
        >
          Contact Me
        </Link>
      </div>
    </section>

     <About />
      <Projects />
      <Contact />

    </>


  );
};

export default Home;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';
// import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';
// import { TypeAnimation } from 'react-type-animation';

// const Home = () => {
//   return (
//     <>
//       <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 text-center text-white">
//         <div className="max-w-3xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 shadow-lg transition-shadow duration-500 hover:shadow-white/30">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
//             Hello, I'm <span className="text-cyan-400">Mubashir Ali Hassan</span>
//           </h1>

//           <TypeAnimation
//             sequence={[
//               'Full Stack Developer',
//               2500,
//               'React & Node.js Enthusiast',
//               2500,
//               'Building Modern Web Apps',
//               2500,
//             ]}
//             wrapper="p"
//             className="text-xl md:text-2xl font-semibold text-gray-300 mb-10"
//             repeat={Infinity}
//           />

//           <div className="flex flex-wrap justify-center gap-6">
//             <Link
//               to="/projects"
//               className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-cyan-500/50 transform transition duration-300 inline-flex items-center gap-2"
//             >
//               View Projects <FaArrowRight />
//             </Link>
//             <Link
//               to="/contact"
//               className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600/20 hover:scale-105 transform transition duration-300 inline-flex items-center gap-2"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>
//       </section>

//       <About />
//       <Projects />
//       <Contact />
//     </>
//   );
// };

// export default Home;

