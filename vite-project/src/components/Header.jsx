import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Svg from './Svg';



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    
    <nav className="w-full flex justify-between items-center px-6 py-4 md:px-8 relative container mx-auto">
        <h1 className="text-2xl font-bold text-red-500">Proxylab</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-red-500">Features</a>
          <a href="#" className="text-gray-700 hover:text-red-500">Pricing & Plans</a>
          <a href="#" className="text-gray-700 hover:text-red-500">Support</a>
          <a href="#" className="text-gray-700 hover:text-red-500">About Us</a>
        </div>
        <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg">Contact Us</button>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-500 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 z-50 md:hidden">
            <a href="#" className="text-gray-700 hover:text-red-500">Features</a>
            <a href="#" className="text-gray-700 hover:text-red-500">Pricing & Plans</a>
            <a href="#" className="text-gray-700 hover:text-red-500">Support</a>
            <a href="#" className="text-gray-700 hover:text-red-500">About Us</a>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Contact Us</button>
          </div>
        )}
      </nav>
    </>
   
  );
};

export default Header;