import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const ListMenu = ({ text }) => {
  return (
    <li className="flex items-center justify-between gap-5 w-full bg-My-blue text-white rounded-2xl py-2 px-4">
      {text}
      <IoIosArrowDown />
    </li>
  );
};

export default ListMenu;
