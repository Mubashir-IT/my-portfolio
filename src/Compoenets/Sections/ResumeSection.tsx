export default function ResumeSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800">
            My <span className="text-red-400">Resume</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-medium text-gray-800 mb-12 text-center">Education</h3>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 mb-3 font-medium tracking-wide">JUNE 15, 2013 - 2016</div>
                <h4 className="text-xl font-medium text-blue-500 mb-3">
                  Master in Computer Engineering
                  <span className="text-sm text-gray-500 ml-2 font-normal">- First Class</span>
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem Ipsum Commodo Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut
                  Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 mb-3 font-medium tracking-wide">JUNE 12, 2010 - 2013</div>
                <h4 className="text-xl font-medium text-blue-500 mb-3">
                  Bachelor in Computer Engineering
                  <span className="text-sm text-gray-500 ml-2 font-normal">- First Class</span>
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem Ipsum Commodo Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut
                  Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 mb-3 font-medium tracking-wide">JUNE 1, 2009 - 2010</div>
                <h4 className="text-xl font-medium text-blue-500 mb-3">
                  Higher Secondary
                  <span className="text-sm text-gray-500 ml-2 font-normal">- (A+)</span>
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem Ipsum Commodo Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut
                  Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
