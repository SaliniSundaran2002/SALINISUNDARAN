import React from 'react';
import img from '../assets/Images/img1.jpg';

const About = () => {
  return (
    <div className="bg-black text-white p-10 md:p-20 font-SourGummy">
      <h1 className="text-4xl md:text-2xl  font-bold mb-8 text-center md:text-left text-cyan-400">About Me</h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image Section */}
        <div className="md:w-2/4 mb-8 md:mb-0">
          <img 
            className="rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105" 
            src={img} 
            alt="Salini Sundaran" 
          />
        </div>
        
        {/* Text Section */}
        <div className="md:w-2/4">
          <p className="text-lg md:text-2xl mb-6 text-opacity-80 text-center md:text-left text-justify">
            Hi, I am <span className="text-cyan-400 font-semibold">Salini Sundaran</span>, a passionate and enthusiastic <span className="text-cyan-400 font-semibold">Frontend Developer</span> with a solid background in <span className="text-cyan-400">MERN Stack</span>, <span className="text-cyan-400">Django</span>, and <span className="text-cyan-400">Blockchain Development</span>. I am always excited to learn new technologies and apply them to solve real-world problems.
          </p>

          <p className="text-lg md:text-2xl mb-6 text-opacity-80 text-center md:text-left text-justify">
            I have developed several <span className="text-cyan-400 font-semibold">projects</span> that incorporate modern <span className="text-cyan-400 font-semibold">web development practices</span>, focusing on creating <span className="text-cyan-400 font-semibold">responsive</span>, <span className="text-cyan-400 font-semibold">user-friendly</span>, and <span className="text-cyan-400 font-semibold">scalable applications</span>. I am particularly passionate about exploring the integration of <span className="text-cyan-400 font-semibold">blockchain technology</span> and <span className="text-cyan-400 font-semibold">decentralized applications</span> to drive <span className="text-cyan-400 font-semibold">innovation</span>.
          </p>

          <p className="text-lg md:text-2xl mb-6 text-opacity-80 text-center md:text-left text-justify">
            With my strong <span className="text-cyan-400 font-semibold">technical skills</span> and passion for <span className="text-cyan-400 font-semibold">coding</span>, I am looking forward to contributing to exciting <span className="text-cyan-400 font-semibold">projects</span> and collaborating with <span className="text-cyan-400 font-semibold">like-minded individuals</span> to build amazing <span className="text-cyan-400 font-semibold">solutions</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
