import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="bg-white dark:bg-gray-700 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4">
          Projects
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-heading font-semibold mb-2">
                Project 1
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Description of Project 1. This project is a full-stack web
                application built with React, Node.js, and MongoDB. It allows
                users to create and manage their to-do lists.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Implemented a RESTful API for managing to-do lists.</li>
                <li>
                  Designed and implemented a responsive user interface using
                  React and Tailwind CSS.
                </li>
                <li>
                  Utilized MongoDB as the database to store to-do list data.
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-heading font-semibold mb-2">
                Project 2
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Description of Project 2. This project is a machine learning
                model that predicts housing prices based on various features
                such as location, size, and age.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>
                  Trained a gradient boosting machine model using scikit-learn.
                </li>
                <li>
                  Evaluated the model using cross-validation and reported the
                  performance metrics.
                </li>
                <li>
                  Created a user interface for users to input their data and get
                  predictions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
