import React from "react";
interface ExperienceProps {
  propData: {
    title?: string;
    companies?: Array<companies>;
  };
}

interface companies {
  id: string;
  companyName: string;
  address: string;
  designations: Array<designations>;
}

interface designations extends title {
  duration: string;
  desc: Array<title>;
}

interface title {
  id: string;
  title: string;
}

const Experience = ({ propData }: ExperienceProps) => {
  return (
    <section className="w-full px-6 py-3   ">
      <h2 className="heading">{propData.title}:-</h2>
      <ul className="flex flex-col-reverse">
        {propData.companies?.map((Company) => {
          return (
            <li className="my-2" key={Company.id}>
              <div className="flex flex-row gap-1 items-end">
                <h2 className="headingItalic">{Company.companyName}</h2>
                {","}
                <p className="text-sm">{Company.address}</p>
              </div>
              <ul>
                {Company.designations.map((item: designations) => {
                  return (
                    <li key={item.id}>
                      <div className="flex justify-between ml-5">
                        <p>{item.title}</p>
                        <p> {item.duration}</p>
                      </div>
                      <ul className="">
                        {item.desc.map((des: title) => {
                          return (
                            <li className="list-disc ml-12  para" key={des.id}>
                              {des.title}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Experience;
