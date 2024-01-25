import React from "react";
import HeaderList from "./HeaderList";
interface Headerprops {
  propData: {
    name: string;
    title: string;
    desc: string;
    info: Array<infoArr>;
    socialMedia: Array<infoArr>;
  };
}

const Header = ({ propData }: Headerprops) => {
  const { name, title, desc, info, socialMedia } = propData;
  const variant = ["text-red-500", "text-green-500", "text-gray-500"];

  return (
    <header className="w-full bg-gray-300 dark:bg-orange-700 px-6 py-3 flex">
      <div className="w-2/3 ">
        <h1 className={`text-bold text-6xl text-${variant[0]}-600`}>{name}</h1>
        <h4>{title}</h4>
        <p className="w-4/5 pt-4">{desc}</p>
      </div>
      <div className="w-1/3 ">
        <ul className="flex flex-col justify-end items-end gap-4 py-2">
          {info.map((item) => {
            return <HeaderList item={item} key={item.id} />;
          })}
          {socialMedia.map((item) => {
            return <HeaderList item={item} key={item.id} />;
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
