import React, { useState } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
type HeaderListProps = {
  item: infoArr;
};

const HeaderList = ({ item }: HeaderListProps) => {
  const iconFinder = (icon: string) => {
    switch (icon) {
      case "Portfolio":
        return <FaHome size={20} />;
      case "Email":
        return <MdEmail size={20} />;
      case "Linkedin":
        return <FaLinkedin size={20} />;
      case "Instagram":
        return <AiFillInstagram size={20} />;
      case "Github":
        return <FaGithub size={20} />;
      case "Address":
        return <IoLocationSharp size={20} />;
      case "Youtube":
        return <FaYoutube size={20} />;

      default:
        break;
    }
  };
  let icon = iconFinder(item.icon ? item.icon : "");

  return (
    <li className=" flex flex-row gap-4 justify-center items-center  text-[14px]">
      {item.href ? (
        <Link
          className="flex gap-4 justify-center items-center"
          href={item.href}
          target="_blank"
          rel="noreferrer noopener"
        >
          {item.icon}
          {icon}
        </Link>
      ) : item.value ? (
        <>
          <span>{item.value}</span>
          {icon}
        </>
      ) : null}
    </li>
  );
};

export default HeaderList;
