import ProgressBar from "../ui/ProgressBar"

export default function SkillsSection() {
  const skills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript (ES6+)", percentage: 75 },
    { name: "React & React Native", percentage: 92 },
    { name: "Node.js & Express", percentage: 84 },
    { name: "MongoDB", percentage: 82 },
    { name: "UI/UX Design", percentage: 85 },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
            My <span className="text-red-400">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I specialize in building complete full stack applications — from responsive frontend interfaces to powerful backend APIs — using modern technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.percentage}%</span>
              </div>
              <ProgressBar percentage={skill.percentage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
