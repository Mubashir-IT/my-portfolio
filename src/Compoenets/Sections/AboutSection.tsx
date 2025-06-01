// CircularProgress component
function CircularProgress({ percentage = 0, className = "text-blue-500" }) {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className={`mx-auto ${className}`}
    >
      <circle
        stroke="currentColor"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{
          strokeDasharray: circumference,
          strokeDashoffset,
          transition: "stroke-dashoffset 0.5s ease-out",
        }}
      />
      <text
        x="50%"
        y="50%"
        dy="0.3em"
        textAnchor="middle"
        className="text-gray-700 font-semibold"
        style={{ fontSize: "1.2rem" }}
      >
        {percentage}%
      </text>
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
            About <span className="text-red-400">Me</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-light text-gray-700 mb-12">
            Creativity bleeds from the pen of inspiration.
          </h3>
        </div>

        {/* Main grid container with 2 columns */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Skills Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <CircularProgress percentage={90} className="text-blue-500 mx-auto" />
              <h4 className="text-xl font-medium text-gray-800 mt-6 mb-3">React.js</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Proficient in building responsive and dynamic UIs using React with hooks and component architecture.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <CircularProgress percentage={85} className="text-green-500 mx-auto" />
              <h4 className="text-xl font-medium text-gray-800 mt-6 mb-3">Node.js</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Experience in developing scalable REST APIs using Express and integrating with MongoDB.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <CircularProgress percentage={80} className="text-yellow-500 mx-auto" />
              <h4 className="text-xl font-medium text-gray-800 mt-6 mb-3">JavaScript</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Strong grasp of modern JavaScript (ES6+), async programming, and client-side logic.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <CircularProgress percentage={75} className="text-cyan-500 mx-auto" />
              <h4 className="text-xl font-medium text-gray-800 mt-6 mb-3">MongoDB</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Skilled in working with MongoDB for storing and managing NoSQL data using Mongoose.
              </p>
            </div>
          </div>

          {/* Right Column: About Text and Personal Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                I'm Mubashir Ali Hassan, a passionate Full Stack Developer with a fresh degree and strong enthusiasm for building scalable digital solutions.
                Specializing in the MERN stack, I thrive on creating performant frontend interfaces and robust backend APIs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a fresher, I'm continuously improving my skills, exploring new technologies, and excited to contribute to real-world projects.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-gray-800 w-32 mb-1 sm:mb-0">Full Name</span>
                <span className="text-gray-600">: Mubashir Ali Hassan</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-gray-800 w-32 mb-1 sm:mb-0">Age</span>
                <span className="text-gray-600">: 21 Years</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-gray-800 w-32 mb-1 sm:mb-0">Language</span>
                <span className="text-gray-600">: English, Urdu</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-gray-800 w-32 mb-1 sm:mb-0">Phone No</span>
                <span className="text-gray-600">: +92 3289323307</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-gray-800 w-32 mb-1 sm:mb-0">Email</span>
                <span className="text-gray-600">: maubashirali9323@gmail.com</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-gray-800 w-32 mb-1 sm:mb-0">Address</span>
                <span className="text-gray-600">: Multan, Punjab, Pakistan</span>
              </div>
            </div>
          </div>
        </div> {/* end grid */}
      </div>
    </section>
  );
}
