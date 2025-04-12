// AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  const aboutData = {
    name: "VS NIKHIL MAHESWAR",
    title: "Full Stack Developer",
    location: "Kerala, INDIA",
  
    introduction: "Passionate Full Stack Developer with expertise in building scalable web applications and delivering exceptional user experiences.",
    description: "I specialize in JavaScript ecosystem, particularly React and Node.js. With a strong foundation in both frontend and backend development, I enjoy creating efficient, user-friendly solutions to complex problems.",
    expertise: [
      "Frontend Development",
      "Backend Architecture",
      "API Development",
    ],
   
    personalInfo: [
      { label: "Location", value: "Kerala, INDIA" },
      { label: "Availability", value: "Full-time" },
     
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
            About Me
          </h1>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-purple-600 font-medium">
            {aboutData.title}
          </p>
        </div>

        {/* Introduction Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            Hello, I'm {aboutData.name}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {aboutData.introduction}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {aboutData.description}
          </p>
        </div>

        {/* Stats Grid */}
       

        {/* Expertise Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {aboutData.expertise.map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-gray-600"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Info Grid */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.personalInfo.map((info, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 text-gray-600"
              >
                <span className="font-semibold text-purple-600 min-w-[100px]">
                  {info.label}:
                </span>
                <span>{info.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full 
                           hover:bg-purple-700 transform hover:scale-105 
                           transition duration-300 shadow-lg">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;