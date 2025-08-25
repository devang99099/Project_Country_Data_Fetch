import React from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="bg-[#202020]  p-5 flex flex-col items-start gap-4 w-[220px] rounded-4xl shadow-md border border-gray-700 overflow-hidden max-w-xs mx-4">
      <div className="w-full h-[120px] overflow-hidden rounded-t-2xl">
        <img
          src={flags.svg}
          alt={flags.alt || "flag"}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="text-white w-full">
        <p className="font-semibold text-xl mb-2">
          {name.common.length > 12
            ? name.common.slice(0, 10) + "..."
            : name.common}
        </p>
        <div className="space-y-2">
          <p className=" text-sm">
            <span className="font-semibold text-gray-400">Population: </span>
            {population.toLocaleString()}
          </p>
          <p className=" text-sm">
            <span className="font-semibold text-gray-400">Region: </span>
            {region}
          </p>
          <p className=" text-sm">
            <span className="font-semibold text-gray-400">Capital: </span>
            {capital ? capital[0] : "N/A"}
          </p>
        </div>
        <NavLink to={`/country/${name.common}`}>
          <button className="mt-4 px-7 py-1 border-2 border-gray-600 rounded-2xl hover:bg-gray-700 hover:border-gray-400 transition-all duration-300 cursor-pointer">
            Read more →
          </button>
        </NavLink>
      </div>
    </li>
  );
};

export default CountryCard;
