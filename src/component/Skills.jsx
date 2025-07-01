import React from 'react';
import { Code, Database, Globe, Server, Smartphone, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 98 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 85 }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 90 },
        { name: "RESTful APIs", level: 95 },
        { name: "GraphQL", level: 80 },
        { name: "JWT Authentication", level: 88 },
        { name: "Socket.io", level: 85 }
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Database,
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 80 },
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 }
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const additionalSkills = [
    { icon: Globe, name: "Web Performance", description: "Optimization and SEO" },
    { icon: Smartphone, name: "Responsive Design", description: "Mobile-first approach" },
    { icon: Palette, name: "UI/UX Design", description: "User-centered design principles" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized in the MERN stack with expertise across the full development lifecycle
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {additionalSkills.map((skill, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;