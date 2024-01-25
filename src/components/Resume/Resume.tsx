import React from "react";
import Link from "next/link";
import Header from "./classic/Header";
import Experience from "./classic/Experience";
import Projects from "./classic/Projects";
import SkillSet from "./classic/SkillSet";
import Footer from "./classic/Footer";
import { getResumeAPI } from "../../libs/resumeAPI";

const Resume = async () => {
  const apiResumeData: Promise<ResumeData> = getResumeAPI();
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
      <Link
        href={"https://vivekcsein.github.io/resume/"}
        target="_blank"
        className="cursor-pointer"
      >
        <h2 className=" flex justify-center  ">visit for online portfolio</h2>
      </Link>
    </div>
  );
};

export default Resume;
