import React from 'react';
import resumePdf from '../assets/prajwal-adhikari-cv.pdf';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-black" />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div className="text-center md:text-left">
          <p className="text-teal-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Full-Stack Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Prajwal Adhikari
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-lg">
            Passionate full-stack developer from Nepal, crafting modern and responsive web experiences.
          </p>
          <a
            href={resumePdf}
            download
            className="inline-block bg-teal-500 hover:bg-teal-400 text-black font-bold py-4 px-10 rounded-full uppercase tracking-wide transition shadow-xl"
          >
            Download Resume
          </a>
        </div>

        {/* Isometric illustration */}
        <div className="flex justify-center">
          <img
            src="https://c8.alamy.com/comp/3BFE89A/remote-work-programmer-home-setup-young-black-man-coding-software-development-coding-skills-computer-screen-hot-coffee-3BFE89A.jpg"
            alt="Developer coding"
            className="w-full max-w-2xl rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}