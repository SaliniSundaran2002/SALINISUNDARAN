import React from 'react';
import 'animate.css';


const Skills = () => {
  return (
    <div className="bg-black h-screen text-white p-10 md:p-20 font-SourGummy">
      <h1 className="text-4xl md:text-3xl font-bold mb-8 text-center text-cyan-400">Skills</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center skill-item animate__animated animate__fadeInUp">
          <h3 className="text-lg md:text-2xl font-semibold mb-4 text-cyan-400">Frontend Development</h3>
          <ul className="list-disc pl-5 text-lg md:text-xl">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="flex flex-col items-center skill-item animate__animated animate__fadeInUp animate__delay-1s">
          <h3 className="text-lg md:text-2xl font-semibold mb-4 text-cyan-400">Backend Development</h3>
          <ul className="list-disc pl-5 text-lg md:text-xl">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Django</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        <div className="flex flex-col items-center skill-item animate__animated animate__fadeInUp animate__delay-2s">
          <h3 className="text-lg md:text-2xl font-semibold mb-4 text-cyan-400">Blockchain & Web3</h3>
          <ul className="list-disc pl-5 text-lg md:text-xl">
            <li>Solidity</li>
            <li>Ethereum</li>
            <li>Smart Contracts</li>
            <li>Web3.js</li>
          </ul>
        </div>

        <div className="flex flex-col items-center skill-item animate__animated animate__fadeInUp animate__delay-3s">
          <h3 className="text-lg md:text-2xl font-semibold mb-4 text-cyan-400">Other Skills</h3>
          <ul className="list-disc pl-5 text-lg md:text-xl">
            <li>Git & GitHub</li>
            <li>UI/UX Design</li>
            <li>Figma</li>
            <li>Boostrap</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
