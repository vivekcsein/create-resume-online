import React from "react";
// import { resumeData } from "../../data";
import Header from "./template/Header";
import Experience from "./template/Experience";
import Projects from "./template/Projects";
import Skills from "./template/Skills";
import SkillSet from "./template/SkillSet";
import Footer from "./template/Footer";
import { getResumeAPI } from "@/libs/resumeAPI";

// import Header from "./classic/Header";
// import About from "./classic/Aboutus";
// import Skills from "./classic/Skills";
// import Experience from "./classic/Experience";
// import Education from "./classic/Education";
// import Projects from "./classic/Projects";

const Resume = async () => {
  const apiResumeData = getResumeAPI();
  const resumeData = await apiResumeData;
  return (
    <div className="bg-gray-100 dark:bg-gray-700 m-w-[300px] max-w-[1000px] m-auto">
      <Header propData={resumeData.Heading} />
      <SkillSet propData={resumeData.skills} />
      <div className="w-full flex gap-2">
        <div className="w-full">
          {/* <Skills propData={resumeData.skills} /> */}
          <Projects propData={resumeData.projects} />
        </div>
        <Experience propData={resumeData.Experience} />
      </div>
      <Footer propData={resumeData.Heading} />
    </div>
  );
};

export default Resume;
