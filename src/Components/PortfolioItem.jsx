import React from 'react';

export default function PortfolioItem({ title, description, screenshot, url }) {
  return (
    <div className="bg-gray-800/60 backdrop-blur rounded-xl overflow-hidden border border-gray-700 hover:border-teal-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20">
      <img src={screenshot} alt={title} className="w-full h-80 object-cover" />
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 mb-8">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-500 hover:bg-teal-400 text-black font-bold py-3 px-8 rounded-full uppercase transition"
        >
          View Project
        </a>
      </div>
    </div>
  );
}