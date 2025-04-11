import React from "react";
import { Github,ExternalLink } from 'lucide-react';
import airtm from './assets/airtm.png'
import besteats from './assets/besteats.png'
import Todo from './assets/Todo.png'
import crypto from './assets/crypto.png'
import portfolio from './assets/Portfolio.png'
function Project() {
  const projects = [
  
    {
      id: 3,
      title: "Airtm-clone",
      description:
        "Developed a responsive front-end clone of the AirTM website using React and Tailwind CSS.",
      image: airtm,
      technologies: ["React.js", "Tailwind CSS"],
      Gitlink: "https://github.com/Vsnikhilmaheswar/Airtm-clone",
      Demolink: "https://airtm-clone-eight.vercel.app/"

    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website with dark mode and animations.",
      image: portfolio,
      category: "Web",
      technologies: ["React", "Tailwind CSS", ],
    Demolink : "https://vsnikhilmaheswar.vercel.app/",
    Gitlink : "https://github.com/Vsnikhilmaheswar/Portfolioo"

    },
    {
      id: 5,
      title: "Best Eats App",
      description:
        "BestEats is a sleek food discovery app built with React and Tailwind CSS for easy browsing and filtering of dishes.",
      image: besteats,
      category: "Web",
      technologies: ["React Js", "Tailwind CSS ",],
      Demolink: "https://best-eats-blue.vercel.app/",
      Gitlink : "https://github.com/Vsnikhilmaheswar/Portfolioo"

    },
    {
      id: 6,
      title: "TODO App",
      description: "A headless CMS with API endpoints for content delivery.",
      image: Todo,
      category: "Web",
      technologies: ["React JS","Json Server","Tailwind CSS"],
      Demolink: "https://todo-frontend-react-six.vercel.app/",
      Gitlink : "https://github.com/Vsnikhilmaheswar/Todo-Frontend-React"
    },
    {
      id: 7,
      title: "DeepReality",
      description: "A DeepFake detection system using VGG16",
      image: Todo,
      category: "Web",
      technologies: ["React JS","FastAPI","Tailwind CSS","Tensorflow"],
      Demolink: "https://todo-frontend-react-six.vercel.app/",
      Gitlink : "https://github.com/Vsnikhilmaheswar/Todo-Frontend-React"
    },
  ];

  return (
    <div id="projects">
      <div className="px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center pb-0 pt-15">
          My Projects
        </h2>
        <div className="h-1 w-30 bg-purple-600 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center pb-20">
        collection of projects that showcase my skills and experience in building digital products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    { projects.map((project)=>( <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 "
              />
            </div>
         

          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-gray-900">
                {project.title}
              </h3>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                {project.category}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between"> 
                <a target="_blank" href={project.Gitlink} ><button className="flex border gap-3 p-1 px-2 rounded border-gray-300 hover:bg-black hover:text-white">    <Github size={20} className="hover:text-white"/> Code</button></a>
                <a target="_blank" href={project.Demolink} >  <button className="flex border gap-3 p-1 px-2 rounded  bg-black text-white"> <ExternalLink size={20} className="hover:text-white"/> Demo </button></a>
            </div>
          </div>
          </div>))     }
        </div>
      </div>
    </div>
  );
}

export default Project;
