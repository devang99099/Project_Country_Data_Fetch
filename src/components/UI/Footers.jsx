import React from "react";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import footerApi from "../../api/footerApi.json";
import { MdCall } from "react-icons/md";

const Footers = () => {
  const FooterIcon = {
    MdPlace: <MdPlace className="text-blue-500 text-4xl " />,
    MdCall: <MdCall className="text-blue-500 text-4xl" />,
    TbMailPlus: <TbMailPlus className="text-blue-500 text-4xl " />,
  };

  return (
    <footer className="bg-[#121212] text-white mt-10 pt-5">
      <div className="max-w-6xl mx-auto px-12 flex justify-between  gap-10   text-center max-sm:text-left max-sm:flex-col max-sm:px-4 max-sm:justify-start max-sm:gap-6">
        {footerApi.map((cutData, index) => {
          const { icon, title, details } = cutData;
          return (
            <div
              key={index}
              className="flex  gap-2 justify-center items-center max-md:justify-start "
            >
              <div>{FooterIcon[icon]}</div>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-gray-400 text-sm">{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-700 mt-5"></div>

      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>
          Copyright &copy; 2024, All Right Reserved{" "}
          <NavLink to="/" className="text-blue-500 font-medium">
            WorldAtlas
          </NavLink>
        </p>
        <ul className="flex gap-4 flex-wrap">
          <li>
            <NavLink to="/" className="hover:text-white">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-white">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-white">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/country" className="hover:text-white">
              Country
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footers;
