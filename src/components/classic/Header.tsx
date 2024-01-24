import React from "react";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4">
          John Doe
        </h2>
        <h3 className="text-2xl lg:text-3xl mb-6">Software Engineer</h3>
        <div className="flex justify-center mb-12">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-700 text-white font-heading font-semibold py-2 px-4 rounded mr-4"
          >
            Download Resume
          </a>
          <a
            href="#"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-heading font-semibold py-2 px-4 rounded"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
