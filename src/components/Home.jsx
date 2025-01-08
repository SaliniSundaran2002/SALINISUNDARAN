import React, { useState, useEffect } from 'react';
import avatarImg from '../assets/Images/img4.jpg';

const Home = () => {
  const keywords = [
    "Frontend Developer",
    "MERN Stack",
    "Django",
    "Blockchain Developer"
  ];

  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black h-screen text-white flex flex-col md:flex-row items-center p-10 md:p-20 font-SourGummy">
      <div className="md:w-2/4">
        <h1 className="text-3xl md:text-6xl font-bold">SALINI SUNDARAN</h1>
        
        {/* Only color transition for keywords */}
        <p className="text-lg md:text-2xl mb-5 text-opacity-80">
          {/* Apply color change with a smooth transition */}
          <span
            className="inline-block transition-color duration-1000"
            style={{
              color: currentKeywordIndex === 0 ? 'white' : '#00bcd4', // Cyan color for transition
            }}
          >
            {keywords[currentKeywordIndex]}
          </span>
        </p>

        <button className="mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a
            href="/path-to-resume.pdf"
            download="Resume_Salini_Sundaran.pdf"
          >
            Download Resume
          </a>
        </button>
      </div>
      <div className="md:w-2/4">
        <img className="rounded-lg p-4" src={avatarImg} alt="Salini Sundaran" />
      </div>
    </div>
  );
};

export default Home;
