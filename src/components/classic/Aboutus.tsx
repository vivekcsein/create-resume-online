import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-700 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4">
          About Me
        </h2>
        <div className="flex justify-center mb-12">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-40 h-40"
          />
        </div>
        <p className="text-gray-800 dark:text-gray-100 mb-12">
          I am a software engineer with over 5 years of experience in building
          web applications using modern technologies. I am passionate about
          learning new technologies and creating elegant solutions for complex
          problems.
        </p>
      </div>
    </section>
  );
};

export default About;
