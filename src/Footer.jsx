// Footer.jsx
import React from 'react';

const Footer = () => {
  const portfolioData = {
    name: "V S NIKHIL MAHESWAR",
    title: "Full Stack Developer",
    email: "nikhilmaheswar12@gmail.com",
    socialLinks: [
      { name: "GitHub", url: "#", icon: "👨‍💻" },
      { name: "LinkedIn", url: "#", icon: "💼" },
      { name: "Twitter", url: "#", icon: "🐦" },
      
    ],
    quickLinks: [
      { name: "Projects", url: "#projects" },
      { name: "About", url: "#about" },
      { name: "Blog", url: "#blog" },
      { name: "Contact", url: "#contact" }
    ]
  };

  return (
    <footer className="bg-gradient-to-t from-purple-900 to-purple-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Let's Connect
          </h2>
          <p className="text-purple-200 text-center max-w-md mb-6">
            Feel free to reach out for collaborations or just a friendly hello! 👋
          </p>
          <a 
            href={`mailto:${portfolioData.email}`}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full 
                     transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Get In Touch
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-purple-700 my-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Social Links */}
          <div className="flex justify-center md:justify-start space-x-4">
            {portfolioData.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-purple-200 hover:text-white text-2xl 
                         transition duration-300 transform hover:scale-110"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Middle - Name & Title */}
          <div className="text-center">
            <h3 className="text-white font-bold text-xl mb-1">
              {portfolioData.name}
            </h3>
            <p className="text-purple-200">
              {portfolioData.title}
            </p>
          </div>

          {/* Right - Quick Links */}
        
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 text-purple-200 text-sm">
          <p>
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
          <p className="mt-2">
            Crafted with ❤️ and ☕
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-purple-600 p-3 rounded-full shadow-lg 
                 hover:bg-purple-500 transition duration-300 text-white"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;