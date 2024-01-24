import React from "react";
import HeaderList from "./HeaderList";

type FooterData = {
  propData: {
    name: string;
    title: string;
    desc: string;
    info: Array<infoArr>;
    socialMedia: Array<infoArr>;
  };
};

type infoArr = {
  id: string;
  icon: string;
  value?: string;
  href?: string;
};
const Footer = ({ propData }: FooterData) => {
  const { info, socialMedia } = propData;
  const arr: Array<infoArr> = [];
  info.map((item: infoArr) => {
    arr.push(item);
  });
  socialMedia.map((item: infoArr) => {
    arr.push(item);
  });
  return (
    <section className="flex gap-4 justify-center flex-wrap items-center py-10">
      {arr.map((item: infoArr) => {
        return <HeaderList item={item} key={item.id} />;
      })}
    </section>
  );
};

export default Footer;
