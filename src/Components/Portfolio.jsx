import React from 'react';
import PortfolioItem from './PortfolioItem';

const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'MongoDB'];

const projects = [
  {
    title: "Personal Portfolio",
    description: "Modern dark-themed portfolio built with React, Vite, and Tailwind CSS v4.",
    screenshot: "https://via.placeholder.com/800x600?text=Portfolio+Screenshot",
    url: "#"
  },
  {
    title: "Jobgasm",
    description: "Responsive job board UI with clean design and great UX.",
    screenshot: "https://via.placeholder.com/800x600?text=Jobgasm+Screenshot",
    url: "https://github.com/frail2004/jobgasm"
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Skills */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-teal-400 text-3xl font-bold mb-12">◉ Skills</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {skills.map(skill => (
              <div key={skill} className="bg-gray-800/50 backdrop-blur p-8 rounded-2xl border border-gray-700 hover:border-teal-400 transition">
                <div className="text-5xl font-bold text-teal-400 mb-4">{skill.slice(0,2).toUpperCase()}</div>
                <p className="text-gray-300">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-teal-400 text-3xl font-bold mb-12">◉ Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {projects.map(proj => <PortfolioItem key={proj.title} {...proj} />)}
          </div>
        </div>
      </section>

      {/* About + Contact with skyline */}
      <section id="about" className="py-20 px-6 relative overflow-hidden">
        <img src="https://png.pngtree.com/png-clipart/20230803/original/pngtree-new-york-city-skyline-silhouette-black-skyline-united-vector-picture-image_9425441.png" alt="skyline" className="absolute bottom-0 left-0 w-full opacity-20 pointer-events-none" />

        <div className="container mx-auto grid md:grid-cols-2 gap-16 relative z-10">
          {/* About */}
          <div className="text-center md:text-left">
            <h2 className="text-teal-400 text-3xl font-bold mb-8">◉ About</h2>
            <div className="relative inline-block mb-8">
              <img src="https://via.placeholder.com/300" alt="Prajwal" className="w-80 h-80 rounded-full object-cover border-8 border-teal-400" />
              <div className="absolute inset-0 rounded-full bg-teal-400 blur-3xl opacity-40 -z-10"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Prajwal Adhikari</h3>
            <p className="text-gray-300 leading-relaxed">
              Full-stack developer passionate about creating beautiful, functional web applications from the land of Himalayas.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h2 className="text-teal-400 text-3xl font-bold mb-8">◉ Contact</h2>
            <p className="text-gray-300 mb-8">
              Always open to new opportunities and collaborations.
            </p>
            <div className="space-y-4 text-gray-300">
              <p>+977 9860288230</p>
              <p>Jhapa, Nepal</p>
              <div className="flex gap-8 mt-10 justify-center md:justify-start">
                <a href="https://github.com/frail2004" target="_blank" rel="noopener noreferrer" className="text-4xl text-teal-400 hover:text-teal-300">GitHub</a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-4xl text-teal-400 hover:text-teal-300">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}