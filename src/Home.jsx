import React from "react";
 // Adjust path as needed
import Nav from "./Nav"; // Ensure Nav is correctly imported
import Spline from '@splinetool/react-spline';

import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ExternalLink,
  ChevronRight,
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  Send,
} from "lucide-react"
function Home() {
  return (
    <>
    <div className="bg-purple-100"> 
    
    <div className="grid md:grid-cols-2 pt-16 pb-15">
           <div className="ms-6 ">
            <span className="inline-block px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium mb-4">  Full Stack Developer</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Building digital <span className="text-purple-600">experiences</span> that matter
            </h1>
            <p className="text-lg text-gray-600 mb-8">
            I'm <span className="font-bold">V S NIKHIL MAHESWAR</span> <br/> A passionate full stack developer specializing in creating elegant solutions with modern technologies.
            Let's bring your ideas to life!
            </p>
          
          <div className="flex gap-4 pb-4 ">
          <a
  href="/resume.pdf"
  download="VS_Nikhil_Maheswar_Resume.pdf"

> <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors">Resume</button></a>
           
            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-md hover:bg-purple-50 transition-colors">Contact Me</button>
          </div>
          <div className="flex space-x-2 pb-4 md:"> 
             <a
                  href="https://github.com/Vsnikhilmaheswar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-purple-700 dark:text-black dark:hover:text-purple-700 transition-colors"
                >
                  <Github className="h-8 w-8 " />
                </a>
                <a
                  href="https://www.linkedin.com/in/vsnikhilmaheswar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 dark:text-black dark:hover:text-purple-700 transition-colors"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 dark:text-black dark:hover:text-purple-700 transition-colors"
                >
                  <Twitter className="h-8 w-8" />
                </a>
                <a
                  href="mailto:nikhilmaheswar12@gmail.com"
                  className="text-gray-600 hover:text-purple-600 dark:text-black dark:hover:text-purple-700 transition-colors"
                >
                  <Mail className="h-8 w-8" />
                </a>
                
                
                </div>
           </div>
           <div className=" md:flex justify-center   ">
                   {/* <img className="rounded-3xl bg-cover w-155 h-120 md:w-150 md:h-120" src="https://img.freepik.com/free-vector/online-games-concept_23-2148527136.jpg?t=st=1743571847~exp=1743575447~hmac=c80d0fc83a8da77fab27def43353166ac3bcb45f6f4933ac981b52974f46d63e&w=1380"/>     */}
                   <main className="mt-0">
      <Spline
        scene="https://prod.spline.design/4hnOz5Al-jhCp5LV/scene.splinecode" 
      />
    </main>
                          </div>

    </div>
    </div>
 
    </>
  );
}

export default Home;
