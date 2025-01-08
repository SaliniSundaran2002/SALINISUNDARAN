import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-black text-white p-4 font-SourGummy">
      <ul className="flex justify-between items-center">
        <li>
          <h2 className="text-3xl text-cyan-400">SALINI SUNDARAN</h2>
        </li>
        <li className="flex space-x-4">
          <Link to="/" className="hover:text-cyan-400">Home</Link>
          <Link to="/about" className="hover:text-cyan-400">About</Link>
          <Link to="/projects" className="hover:text-cyan-400">Projects</Link>
          <Link to="/certificates" className="hover:text-cyan-400">Certificates</Link>
          <Link to="/skills" className="hover:text-cyan-400">Skills</Link>
          <Link to="/hobbies" className="hover:text-cyan-400">Hobbies</Link>
          <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
