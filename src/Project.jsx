import React from "react";
import { Github,ExternalLink } from 'lucide-react';
import airtm from './assets/airtm.png'
import besteats from './assets/besteats.png'
import Todo from './assets/Todo.png'
function Project() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration and admin dashboard.",
      image: "./?height=400&width=600",
      category: "Web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A mobile application for managing tasks and projects with team collaboration features.",
      image: "./assets/besteats.png?height=400&width=600",
      category: "Mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      Gitlink: "https://github.com/Vsnikhilmaheswar/Airtm-clone",
      Demolink: "https://airtm-clone-eight.vercel.app/"
    },
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
      image: "/placeholder.svg?height=400&width=600",
      category: "Web",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#",
    },
    {
      id: 5,
      title: "Best Eats App",
      description:
        "BestEats is a sleek food discovery app built with React and Tailwind CSS for easy browsing and filtering of dishes.",
      image: besteats,
      category: "Web",
      technologies: ["React Js", "Tailwind CSS ",],
      link: "https://best-eats-blue.vercel.app/",
    },
    {
      id: 6,
      title: "TODO App",
      description: "A headless CMS with API endpoints for content delivery.",
      image: Todo,
      category: "Web",
      technologies: ["React JS","Json Server","Tailwind CSS"],
      link: "https://todo-frontend-react-six.vercel.app/",
    },
  ];

  return (
    <div>
      <div className="p-5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center pb-5 pt-15">
          My Projects
        </h2>
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
                <a target="_blank" href={project.link} ><button className="flex border gap-3 p-1 px-2 rounded border-gray-300 hover:bg-black hover:text-white">    <Github size={20} className="hover:text-white"/> Code</button></a>
            <button className="flex border gap-3 p-1 px-2 rounded  bg-black text-white"> <ExternalLink size={20} className="hover:text-white"/> Demo </button>
            </div>
          </div>
          </div>))     }
        </div>
      </div>
    </div>
  );
}

export default Project;
