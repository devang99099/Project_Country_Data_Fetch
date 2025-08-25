import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Headers = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-[#202020] shadow-md  h-20 items-center w-full z-10 mt-0">
      <div className="container mx-auto text-white h-20 items-center">
        <div className="flex justify-between items-center  h-20 p-4">
          <div>
            <NavLink to="/">
              <h1 className="text-3xl font-bold">WorldAtlas</h1>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <nav
            className={`${
              menu ? "block" : "hidden"
            } md:flex gap-8 max-md:hidden`}
          >
            <ul className="flex gap-8 end">
              <li className="text-lg hover:underline">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-lg hover:underline">
                <NavLink to="about">About</NavLink>
              </li>
              <li className="text-lg hover:underline">
                <NavLink to="country">Country</NavLink>
              </li>
              <li className="text-lg hover:underline">
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMenu(!menu)}
              aria-expanded={menu}
              aria-label="Toggle menu"
              className="p-2 text-2xl"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`${
            menu ? "block" : "hidden"
          } absolute left-0 top-20 w-full bg-white shadow-lg md:hidden z-20`}
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            <li
              className="text-lg text-black hover:underline"
              onClick={() => setMenu(!menu)}
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className="text-lg text-black hover:underline "
              onClick={() => setMenu(!menu)}
            >
              <NavLink to="about">About</NavLink>
            </li>
            <li
              className="text-lg text-black hover:underline "
              onClick={() => setMenu(!menu)}
            >
              <NavLink to="country">Country</NavLink>
            </li>
            <li
              className="text-lg text-black hover:underline "
              onClick={() => setMenu(!menu)}
            >
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Headers;
