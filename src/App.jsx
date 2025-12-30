import React, { useState } from 'react';
import resumePdf from './assets/prajwal-adhikari-cv.pdf';
import profilePhoto from './assets/profilephoto.jpg'; // Your photo

// Icons
import { 
  FaTerminal, 
  FaGithub, 
  FaLinkedin, 
  FaBars,
  FaTimes
} from 'react-icons/fa';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="matrix-rain">
          {Array(40).fill(null).map((_, i) => (
            <div key={i} className="rain-column" style={{ left: `${i * 2.5}%`, animationDelay: `${Math.random() * 5}s` }}>
              {Array(20).fill(null).map((_, j) => (
                <span key={j} className="rain-char">{Math.random() > 0.5 ? '1' : '0'}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b-2 border-green-600">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-400 glitch" data-text="Frail@portfolio:~">
            Frail@portfolio:~
          </h1>

          <ul className="hidden md:flex gap-10 text-green-300 text-lg">
            <li><a href="#skills" className="hover:text-green-400 transition">./skills</a></li>
            <li><a href="#portfolio" className="hover:text-green-400 transition">./projects</a></li>
            <li><a href="#about" className="hover:text-green-400 transition">./about</a></li>
            <li><a href="#contact" className="hover:text-green-400 transition">./contact</a></li>
          </ul>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-green-400 text-3xl">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 border-t-2 border-green-600">
            <ul className="py-6 text-center space-y-4">
              <li><a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-green-300 hover:text-green-400">./skills</a></li>
              <li><a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-green-300 hover:text-green-400">./projects</a></li>
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-green-300 hover:text-green-400">./about</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-green-300 hover:text-green-400">./contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Terminal */}
      <section className="min-h-screen flex items-center px-6 pt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-black/80 border-2 border-green-500 rounded-lg p-10 shadow-2xl shadow-green-500/60">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
              </div>
              <span className="text-green-400">terminal.exe</span>
            </div>
            <pre className="text-lg leading-loose">
{`> whoami
Frail (Prajwal Adhikari)

> pwd
/home/frail/Jhapa/Nepal

> role
Full-Stack Developer | Code Ninja

> skills
[████████████████████████] 100%
• HTML5     • Tailwind CSS
• JavaScript • React
• Node.js    • MongoDB

> status
Online. Ready for new missions.

> contact
+977 9860288230
github.com/Frail2004
linkedin.com/in/your-profile

> _`}
            </pre>
            <span className="inline-block w-3 h-6 bg-green-400 animate-pulse"></span>
          </div>

          <div className="text-center mt-12">
            <a
              href={resumePdf}
              download="prajwal-adhikari-cv.pdf"
              className="inline-block bg-green-900/60 border-2 border-green-500 text-green-400 font-bold py-5 px-16 rounded uppercase tracking-wider hover:bg-green-500 hover:text-black transition shadow-lg shadow-green-500/50"
            >
              DOWNLOAD RESUME.EXE
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400 glitch" data-text="> cat skills.txt">
            > cat skills.txt
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-black/80 border-2 border-green-500 p-8 rounded hover:shadow-2xl hover:shadow-green-500/50 transition">
              <h3 className="text-2xl mb-4">Frontend</h3>
              <p className="text-green-300">HTML • Tailwind CSS • JavaScript • React</p>
            </div>
            <div className="bg-black/80 border-2 border-green-500 p-8 rounded hover:shadow-2xl hover:shadow-green-500/50 transition">
              <h3 className="text-2xl mb-4">Backend</h3>
              <p className="text-green-300">Node.js • Express • REST APIs</p>
            </div>
            <div className="bg-black/80 border-2 border-green-500 p-8 rounded hover:shadow-2xl hover:shadow-green-500/50 transition">
              <h3 className="text-2xl mb-4">Database</h3>
              <p className="text-green-300">MongoDB • CRUD • Aggregation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400 glitch" data-text="> ls projects/">
            > ls projects/
          </h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="bg-black/80 border-2 border-green-500 p-10 rounded hover:shadow-2xl hover:shadow-green-500/60 transition">
              <h3 className="text-2xl mb-6">Personal Portfolio</h3>
              <p className="text-green-300 mb-6">
                Fully furnished hacker-style portfolio with terminal aesthetics, matrix rain, and smooth interactions.
              </p>
              <span className="text-green-500">Status: Deployed // Tech: React, Tailwind</span>
            </div>
            <div className="bg-black/80 border-2 border-green-500 p-10 rounded hover:shadow-2xl hover:shadow-green-500/60 transition">
              <h3 className="text-2xl mb-6">Jobgasm</h3>
              <p className="text-green-300 mb-6">
                Secure job board platform with responsive design and modern UX.
              </p>
              <span className="text-green-500">Status: Active // Tech: React, Node.js</span>
            </div>
          </div>
        </div>
      </section>

      {/* About & Contact */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-10 text-green-400 glitch" data-text="> cat about.txt">
              > cat about.txt
            </h2>
            <div className="relative inline-block">
              <img
                src={profilePhoto}
                alt="Frail (Prajwal Adhikari)"
                className="w-80 h-80 rounded-full object-cover border-4 border-green-500 shadow-2xl shadow-green-500/60"
              />
              <div className="absolute inset-0 rounded-full bg-green-500 blur-2xl opacity-40 -z-10 animate-pulse"></div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-10 text-green-400 glitch" data-text="> ping contact">
              > ping contact
            </h2>
            <pre className="text-green-300 text-lg leading-loose">
{`PING successful.

Phone: +977 9860288230

Social:
GitHub: https://github.com/Frail2004
LinkedIn: https://linkedin.com/in/your-profile

Status: Online. Accepting high-impact missions.`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}