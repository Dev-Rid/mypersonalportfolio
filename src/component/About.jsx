import React from 'react';
import { Code2, Heart, Zap, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      description: "Specialized in MERN stack development with deep understanding of both frontend and backend technologies."
    },
    {
      icon: Heart,
      title: "Passionate Developer",
      description: "Driven by curiosity and love for creating solutions that make a real impact on users' lives."
    },
    {
      icon: Zap,
      title: "Technology Explorer",
      description: "Always learning and experimenting with new frameworks, tools, and best practices in web development."
    },
    {
      icon: Target,
      title: "Solution-Focused",
      description: "Committed to delivering clean, scalable, and maintainable code that solves real-world problems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate full-stack developer with a dedication to crafting exceptional web experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p>
                Hello! I'm Abiola Ridwan, a dedicated full-stack developer who specializes in the 
                <span className="font-semibold text-blue-600"> MERN stack</span>. My journey in web development 
                started with a curiosity about how things work behind the scenes, and it has evolved into a 
                passion for creating digital solutions that make a difference.
              </p>
              <p>
                I believe in writing clean, efficient code and staying up-to-date with the latest 
                technologies and best practices. Whether it's building a responsive frontend with React 
                or designing robust APIs with Node.js and Express, I approach each project with attention 
                to detail and a commitment to excellence.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I'm always excited to take on 
                new challenges and collaborate on innovative projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;