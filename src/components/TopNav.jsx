import React from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "./data/Data";

const TopNav = () => {
  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-white w-full bg-opacity-60 backdrop-blur-md mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4">
      <div className="flex items-center">
        <p className="font-bold text-5xl">EB</p>
      </div>
      <div className="md:flex items-center justify-end gap-1 lg:gap-4">
        <ul className="hidden md:inline-flex items-center gap-1 lg:gap-4">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-black tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div className="px-4 py-2 rounded-md bg-white bg-opacity-70 hover:bg-opacity-90 shadow-md">
                  {title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNav;