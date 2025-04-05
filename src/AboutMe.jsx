import React from 'react'

function AboutMe() {
  return (
    <div className='bg-purple-100 mt-15'>

        <div>
       <div> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center pb-0 pt-15">
         About Me
        </h2>
        <div className="h-1 w-30 bg-violet-600 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center pb-20">
        Get to know more about me, my skills, and what I can offer.
        </p></div>
<div className='p-5 w-[50%] text-justify prose prose-lg text-gray-600 mb-8'>
    <p className=''>Hi, I'm VS Nikhil Maheswar, a passionate Full Stack Developer and a MEARN Stack Intern at Luminar Technolab.




Let's connect and build something amazing together! 🚀</p>
<p> I have a B.Tech in Computer Science from St. Joseph's College of Engineering and Technology, Palai.</p>
<p>I love building web applications and have worked on projects like Best Eats (a food app) and a To-Do app using React, Tailwind CSS, and JSON Server.</p>
<p> I also developed DeepReality, a deepfake detection project using React and FastAPI, and created a front-end-only clone of the AirTM website using Tailwind CSS.
You can find my work on GitHub: Vsnikhilmaheswar.</p>
</div>

        </div>
    </div>
  )
}

export default AboutMe