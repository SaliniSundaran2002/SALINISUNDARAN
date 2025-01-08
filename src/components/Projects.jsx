import React from 'react';
import onboard from '../assets/Images/onboard.png'

const projects = [
  {
    name: "Onboard Orbit",
    image: 'onboard.png', 
    languages: "HTML, CSS, JavaScript, React"
  },
  {
    name: "Project 2",
    image: "project2.jpg", 
    languages: "Node.js, Express, MongoDB"
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="bg-black h-screen text-white p-10 font-SourGummy">
      <h2 className="text-3xl text-cyan-400 mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#2C2C2C] p-5 rounded-lg">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover mt-3 rounded-md"
            />
            <p className="mt-3">{project.languages}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
