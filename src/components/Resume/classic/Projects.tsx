import React from "react";

type ProjectsProps = {
  propData: {
    title: string;
    projectsList: Array<projectsList>;
  };
};

const Projects = ({ propData }: ProjectsProps) => {
  const { title, projectsList } = propData;
  return (
    <section className="w-full px-6 py-3">
      <h2 className="heading">{title}:-</h2>
      <ul className="mt-2 flex flex-col-reverse">
        {projectsList.map((item: projectsList) => {
          return (
            <li key={item.name}>
              <div className="flex flex-row items-end gap-2">
                <h4 className="projectsHeading italic">{item.name}</h4>
                <p> :- {item.client}</p>
              </div>
              <ul>
                <li className="list-disc ml-10">{item.desc}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
