import React from 'react';
import musicImg from '../assets/Images/music.jpg';  // Update the path to your image
import drawingImg from '../assets/Images/drawing.jpg';  // Update the path to your image
import booksImg from '../assets/Images/reading.jpg';  // Update the path to your image

const Hobbies = () => {
  return (
    <div className="bg-black h-screen text-white p-10 md:p-20 font-SourGummy">
      <h1 className="text-4xl md:text-2xl font-bold mb-8 text-center text-cyan-400">Hobbies</h1>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col items-center text-center transition-transform duration-500 transform hover:scale-105">
          <h3 className="text-lg md:text-2xl font-semibold mb-4 text-cyan-400">Listening to Music</h3>
          <img 
            src={musicImg} 
            alt="Listening to Music" 
            className="rounded-lg mb-4 w-40 h-40 object-cover transition-transform duration-500 transform hover:scale-110"
          />
          <p className="text-lg md:text-xl text-opacity-80 transition-opacity duration-300 hover:opacity-80">
            I love listening to music, as it helps me relax and boosts my creativity.
          </p>
        </div>

        <div className="flex flex-col items-center text-center transition-transform duration-500 transform hover:scale-105">
          <h3 className="text-lg md:text-2xl font-semibold mb-4 text-cyan-400">Drawing</h3>
          <img 
            src={drawingImg} 
            alt="Drawing" 
            className="rounded-lg mb-4 w-40 h-40 object-cover transition-transform duration-500 transform hover:scale-110"
          />
          <p className="text-lg md:text-xl text-opacity-80 transition-opacity duration-300 hover:opacity-80">
            Drawing allows me to express my creativity and explore new ideas.
          </p>
        </div>

        <div className="flex flex-col items-center text-center transition-transform duration-500 transform hover:scale-105">
          <h3 className="text-lg md:text-2xl font-semibold mb-4 text-cyan-400">Reading Books</h3>
          <img 
            src={booksImg} 
            alt="Reading Books" 
            className="rounded-lg mb-4 w-40 h-40 object-cover transition-transform duration-500 transform hover:scale-110"
          />
          <p className="text-lg md:text-xl text-opacity-80 transition-opacity duration-300 hover:opacity-80">
            I enjoy reading books, especially on technology, self-improvement, and fiction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
