import Link from "next/link";
import React from "react";

type SkillsProps = {
  propData: {
    title: string;
    skillset: Array<skillset>;
  };
};

const Skills = ({ propData }: SkillsProps) => {
  return (
    <section className="w-full px-6 py-3 ">
      <h2 className="heading">{propData.title}</h2>
      <ul className="flex flex-col mt-4">
        {propData.skillset.map((item: skillset) => {
          return (
            <div className="flex flex-col flex-wrap gap-2 mb-2" key={item.id}>
              <h4>{item.title}</h4>
              <ul className="flex flex-row flex-wrap gap-2 ">
                {item.value.map((item: title) => {
                  return (
                    <li
                      key={item.id}
                      className=" py-2 border-2 border-separate"
                    >
                      <Link
                        href={item.href}
                        target="_blank"
                        className="px-1 py-2 h-full"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
