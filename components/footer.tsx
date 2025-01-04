import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-gradient-to-r from-green-700 via-slate-600 to-slate-800  text-white py-6">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        <div className="space-x-6">
          <a
            href="https://github.com/muhammedbayhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-green-500 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://muhammedbayhan.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-green-500 transition-colors duration-300"
          >
            Web
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-bayhan-b08563228/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-green-500 transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-center sm:text-left text-sm mt-4 sm:mt-0">
          <p>© {date} All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
