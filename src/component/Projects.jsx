import React from 'react';
import { ExternalLink, Github, ArrowRight} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with MERN stack featuring user authentication, payment integration, admin dashboard, and real-time inventory management.",
      image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      githubUrl: "https://github.com/Dev-Rid/biola-ecommerce.git",
      liveUrl: "https://myecommerce-store.netlify.app/",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop interface, team collaboration features, and deadline tracking.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, automated reporting, and multi-platform integration.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Chart.js", "Redis", "Express", "REST APIs"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Weather App",
      description: "Modern weather application with location-based forecasts, interactive maps, and personalized weather alerts using external APIs.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Weather API", "Geolocation", "CSS Animations"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Blog Platform",
      description: "Content management system with markdown support, user authentication, commenting system, and SEO optimization features.",
      image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["MERN Stack", "Markdown", "SEO", "Admin Panel"],
      githubUrl: "https://github.com/Dev-Rid/myblogsite",
      liveUrl: "https://myblogsite-dczl.onrender.com/",
      featured: false
    },
    // {
    //   title: "Chat Application",
    //   description: "Real-time messaging application with group chats, file sharing, emoji reactions, and end-to-end encryption.",
    //   image: "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Encryption"],
    //   githubUrl: "#",
    //   liveUrl: "#",
    //   featured: false
    // }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work demonstrating expertise in full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                     
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                      <a 
                        href={project.liveUrl} 
                        className="flex items-center space-x-2 bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>View Live</span>
                      </a>
                      <a 
                        href={project.githubUrl} 
                        className="flex items-center space-x-2 bg-gray-900/90 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6`}>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors group"
                  >
                    <span>View Project</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="inline-flex items-center space-x-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.liveUrl}
                      className="p-2 bg-white/90 hover:bg-white rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="p-2 bg-white/90 hover:bg-white rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;