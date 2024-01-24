import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="bg-white dark:bg-gray-700 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4">
          Experience
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-heading font-semibold mb-2">
                Software Engineer
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                ABC Company, Inc. - Jan 2018 to Present
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>
                  Developed and maintained web applications using React and
                  Node.js.
                </li>
                <li>
                  Collaborated with cross-functional teams to design and
                  implement new features.
                </li>
                <li>
                  Improved application performance by optimizing database
                  queries and implementing caching strategies.
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">
                Junior Software Engineer
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                XYZ Company, Inc. - Jun 2016 to Dec 2017
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>
                  Assisted in the development of web applications using React
                  and Node.js.
                </li>
                <li>Fixed bugs and improved application stability.</li>
                <li>
                  Participated in code reviews and learned best practices for
                  software development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
