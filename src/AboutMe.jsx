import React from 'react'
import Spline from '@splinetool/react-spline';
function AboutMe() {
  const data = {
    name: "V S NIKHIL MAHESWAR",
    role: "Full Stack Developer",
    bio: "Aspiring Full Stack Developer passionate about building modern, responsive web applications. Currently exploring React, Redux, Tailwind CSS, and backend technologies like Node.js and MongoDB. I enjoy learning by building real-world projects and bringing ideas to life with clean UI and smooth functionality.",
    image: "/your-profile-image.jpg", 
    socialLinks: [
      { name: "GitHub", url: "https://github.com/Vsnikhilmaheswar" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/vsnikhilmaheswar/" },
      { name: "Twitter", url: "#" }
    ],
  
    highlights: [
      { title: "Education", detail: "Bachelor's in Computer Science" },
      { title: "Location", detail: "Kerala,India" },
      { title: "Availability", detail: "Open for opportunities" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-2">
            About Me
          </h1>
          <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Image */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <img 
                src={data.image} 
                alt={data.name}
                className="relative rounded-xl w-full h-[400px] object-cover shadow-lg"
              />
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {data.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="px-6 py-2 bg-white text-purple-600 rounded-full shadow-md hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Introduction Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-purple-800 mb-2">
                Hi, I'm {data.name}
              </h2>
              <h3 className="text-xl text-purple-600 mb-4">{data.role}</h3>
              <p className="text-gray-600 leading-relaxed">
                {data.bio}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-purple-800 font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-purple-600">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
           

            {/* CTA Button */}
            <div className="text-center md:text-left">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transform hover:scale-105 transition duration-300 shadow-lg">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe