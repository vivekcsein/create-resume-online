import Link from "next/link";
import React from "react";

type SkillsProps = {
  propData: {
    title: string;
    skillset: Array<skillset>;
  };
};

interface skillset {
  id: string;
  title: string;
  value: Array<title>;
}

interface title {
  id: string;
  title: string;
  href: string;
}
const SkillSet = ({ propData }: SkillsProps) => {
  const arr: Array<title> = [];
  propData.skillset.map((item) => {
    item.value.map((item: title) => {
      arr.push(item);
    });
  });

  console.log(arr);

  return (
    <section className="w-full px-6 py-3  bg-green-600">
      <h2 className="heading">{propData.title}</h2>
      <ul className="flex flex-row flex-wrap gap-2 ">
        {arr.map((item) => {
          return (
            <li key={item.id} className=" py-2 border-2 border-separate">
              <Link
                href={item.href}
                target="_blank"
                className="px-4 py-2 h-full"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SkillSet;
