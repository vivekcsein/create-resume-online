import React from "react";

const Education = () => {
  return (
    <section id="education" className="bg-white dark:bg-gray-700 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4">
          Education
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-heading font-semibold mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                University of California, Berkeley - Sep 2012 to May 2016
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Graduated with a GPA of 3.8/4.0.</li>
                <li>
                  Participated in various programming competitions and
                  hackathons.
                </li>
                <li>
                  Completed courses in data structures, algorithms, and software
                  engineering.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
