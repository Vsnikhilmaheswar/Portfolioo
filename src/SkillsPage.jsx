import React, { useState } from 'react';
import reactlogo from '../src/assets/react.svg'
import JavaScriptlogo from '../src/assets/javascript.svg'
import htmllogo from '../src/assets/html.svg'
import typescriptlogo from '../src/assets/typescript.svg'
import css from '../src/assets/css.svg'
import vscode from '../src/assets/vscode.svg'
import MongoDB from '../src/assets/mongodb.svg'
import redux from '../src/assets/redux.svg'
import github from '../src/assets/github.svg'
import tailwind from '../src/assets/tailwind-css.svg'
import node from '../src/assets/node-js.svg'

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Skills data organized by categories with icons
  const skillsData = {
    frontend: [
      { name: "React", icon: reactlogo  , color: "bg-gray-800" },
      { name: "JavaScript", icon: JavaScriptlogo, color: "bg-yellow-500" },
      { name: "TypeScript", icon: typescriptlogo, color: "bg-blue-600" },
      { name: "HTML5", icon: htmllogo, color: "bg-orange-500" },
      { name: "CSS3", icon: css, color: "bg-blue-400" },
      { name: "Tailwind CSS", icon: tailwind, color: "bg-white" },
      { name: "Redux", icon: redux, color: "bg-purple-500" },
      ,
    ],
    backend: [
      { name: "Node.js", icon: node, color: "bg-green-600" },
      { name: "Express", icon: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png", color: "bg-gray-500" },
   
   
      { name: "MongoDB", icon:MongoDB, color: "bg-green-500" },

      { name: "REST APIs", icon: "https://media.lordicon.com/icons/wired/gradient/1330-rest-api.svg", color: "bg-black" },
    ],
    tools: [
      { name: "Git", icon: github, color: "bg-orange-600" },
      { name: "GitHub", icon: github, color: "bg-gray-800" },
      { name: "VS Code", icon: vscode, color: "bg-gray-100" },
      { name: "Figma", icon: "https://static.vecteezy.com/system/resources/previews/042/165/840/non_2x/figma-3d-logo-white-background-free-png.png", color: "bg-white" },
    ],
  
  };
  
  // Get all skills or filter by category
  const getSkillsToDisplay = () => {
    if (activeCategory === 'all') {
      return Object.values(skillsData).flat();
    }
    return skillsData[activeCategory] || [];
  };
  
  return (
    <div className="min-h-screen bg-purple-500 py-16 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-gradient-to-r rounded-lg mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center pb-0 pt-15">
          My Projects
        </h2>  <div className="h-1 w-30 bg-purple-600 mx-auto mb-4"></div>  <p className="max-w-xl mt-5 mx-auto text-xl text-white">
            A showcase of my technical expertise and professional capabilities
          </p>
      
          </div>
        
        </div>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-gray-700/50 backdrop-blur-sm">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/20'
                  : 'hover:bg-gray-700/70'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveCategory('frontend')}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeCategory === 'frontend'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/20'
                  : 'hover:bg-gray-700/70'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveCategory('backend')}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeCategory === 'backend'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/20'
                  : 'hover:bg-gray-700/70'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveCategory('tools')}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeCategory === 'tools'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/20'
                  : 'hover:bg-gray-700/70'
              }`}
            >
              Tools
            </button>
           
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {getSkillsToDisplay().map((skill, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className={` rounded-2xl flex items-center justify-center text-2xl ${skill.color} bg-opacity-20 shadow-inner p-2`}>
                   <img className='w-12 h-12' src={skill.icon}/>
                  </div>
                </div>
                <h3 className="text-center text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">{skill.name}</h3>
              </div>
              <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/50 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Summary Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 overflow-hidden group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-purple-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <h3 className="text-xl font-bold text-white mb-3">Frontend Development</h3>
              <p className="text-gray-400">Creating beautiful, responsive, and interactive user interfaces with modern frameworks.</p>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mt-4 group-hover:w-16 transition-all duration-300"></div>
            </div>
            
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 overflow-hidden group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-indigo-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <h3 className="text-xl font-bold text-white mb-3">Backend Development</h3>
              <p className="text-gray-400">Building robust server-side applications, APIs, and database solutions.</p>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mt-4 group-hover:w-16 transition-all duration-300"></div>
            </div>
            
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 overflow-hidden group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-blue-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <h3 className="text-xl font-bold text-white mb-3">Development Tools</h3>
              <p className="text-gray-400">Utilizing modern development tools and workflows for efficient project delivery.</p>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mt-4 group-hover:w-16 transition-all duration-300"></div>
            </div>
            
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 overflow-hidden group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-pink-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <h3 className="text-xl font-bold text-white mb-3">Design & UX</h3>
              <p className="text-gray-400">Crafting intuitive user experiences with a focus on accessibility and usability.</p>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mt-4 group-hover:w-16 transition-all duration-300"></div>
            </div>
          </div>
        </div>
        
    
      </div>
    </div>
  );
}