import React from "react";
import heroImage from "./assets/hero.jpg"; // Adjust path as needed
import Nav from "./Nav"; // Ensure Nav is correctly imported

function Home() {
  return (
    <>
    <div className="bg-purple-100">   <Nav/>
    
    <div className="grid md:grid-cols-2 mt-16 pb-15">
           <div className="ms-6 ">
            <span className="inline-block px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium mb-4">  Full Stack Developer</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Building digital <span className="text-purple-600">experiences</span> that matter
            </h1>
            <p className="text-lg text-gray-600 mb-8">
            I'm <span className="font-bold">V S NIKHIL MAHESWAR</span> <br/> A passionate full stack developer specializing in creating elegant solutions with modern technologies.
            Let's bring your ideas to life!
            </p>
          
          <div className="flex gap-4 pb-10 md:">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors">View Projects</button>
            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-md hover:bg-purple-50 transition-colors">Contact Me</button>
          </div>

           </div>
           <div className="hidden md:flex justify-center  p-10 md:p-3">
                   <img className="rounded-3xl bg-cover w-155 h-120 md:w-150 md:h-120" src="https://img.freepik.com/free-vector/online-games-concept_23-2148527136.jpg?t=st=1743571847~exp=1743575447~hmac=c80d0fc83a8da77fab27def43353166ac3bcb45f6f4933ac981b52974f46d63e&w=1380"/>           </div>

    </div>
    </div>
 
    </>
  );
}

export default Home;
