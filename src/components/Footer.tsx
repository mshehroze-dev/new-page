import React from "react";
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">© {new Date().getFullYear()} AwesomeApp. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
          <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
