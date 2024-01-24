import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="bg-white dark:bg-gray-700 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4">
          Skills
        </h2>
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">
                JavaScript
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Expert</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">React</h3>
              <p className="text-gray-600 dark:text-gray-300">Advanced</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">
                Node.js
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Intermediate</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">
                Tailwind CSS
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Intermediate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
