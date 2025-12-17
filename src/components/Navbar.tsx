import React, { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-600">
          AwesomeApp
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Pricing</a>
          <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">FAQ</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">Sign In</button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2">
          <a href="#features" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200">Features</a>
          <a href="#pricing" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200">Pricing</a>
          <a href="#faq" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200">FAQ</a>
          <button className="block w-full text-left px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 rounded-b-lg">Sign In</button>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
