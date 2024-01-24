import React from "react";
// import { resumeData } from "../../data";
import Header from "./Resume_classic/Header";
import Experience from "./Resume_classic/Experience";
import Projects from "./Resume_classic/Projects";
// import Skills from "./Resume_classic/Skills";
import SkillSet from "./Resume_classic/SkillSet";
import Footer from "./Resume_classic/Footer";
import { getResumeAPI } from "../libs/resumeAPI";

const Resume = async () => {
  const apiResumeData = getResumeAPI();
  const resumeData = await apiResumeData;

  return (
    <div className="bg-gray-100 dark:bg-blue-700 m-w-[300px] max-w-[1000px] sm:scale-100 text-sm md:text-xl m-auto">
      <Header propData={resumeData.Heading} />
      <SkillSet propData={resumeData.skills} />
      <div className="w-full flex gap-2 md:flex-row flex-col">
        <Projects propData={resumeData.projects} />
        <Experience propData={resumeData.Experience} />
      </div>
      <Footer propData={resumeData.Heading} />
      <h2 className=" flex justify-center  ">visit for online portfolio</h2>
    </div>
  );
};

export default Resume;
