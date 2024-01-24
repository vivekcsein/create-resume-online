import React from "react";

type FooterData = {
  propData: {
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
  return <div>Footer</div>;
};

export default Footer;
