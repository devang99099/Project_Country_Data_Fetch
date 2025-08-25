import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndivisualData } from "../../api/postApi";
import { CircularProgress } from "@mui/material";

const CountryDetails = () => {
  const params = useParams();
  console.log(params);
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndivisualData(params.id);
      console.log(res.data[0]);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, []);

  const loading = () => {
    return (
      <div className="flex justify-center mt-80 h-screen bg-black">
        <CircularProgress size="60px" style={{ color: "white" }} />
      </div>
    );
  };

  if (isPending) {
    return loading();
  }
  if (!country) {
    return loading();
  }

  return (
    <section className="bg-[#202020]  text-white p-6 my-10 md:p-12 border-y-2 border-gray-500">
      <div className=" mx-auto flex flex-col md:flex-row gap-20 items-center ">
        {/* Flag Image */}
        <div className="flex-shrink-0  w-full md:w-1/2">
          <img
            src={country.flags.svg}
            alt={country.flags.alt || "Flag"}
            className="w-full h-auto  border-4 border-white shadow-lg rounded"
          />
        </div>

        {/* Country Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
            {country.name.official}
          </h2>

          <p>
            <span className="font-semibold text-gray-400">Native Names: </span>
            {Object.keys(country.name.nativeName)
              .map((key) => country.name.nativeName[key].common)
              .join(", ")}
          </p>

          <p>
            <span className="font-semibold text-gray-400">Population: </span>
            {country.population.toLocaleString()}
          </p>

          <p>
            <span className="font-semibold text-gray-400">Region: </span>
            {country.region}
          </p>

          <p>
            <span className="font-semibold text-gray-400">Sub Region: </span>
            {country.subregion}
          </p>

          <p>
            <span className="font-semibold text-gray-400">Capital: </span>
            {country.capital}
          </p>

          <p>
            <span className="font-semibold text-gray-400">
              Top Level Domain:{" "}
            </span>
            {country.tld?.[0]}
          </p>

          <p>
            <span className="font-semibold text-gray-400">Currencies: </span>
            {Object.keys(country.currencies)
              .map((key) => country.currencies[key].name)
              .join(", ")}
          </p>

          <p>
            <span className="font-semibold text-gray-400">Languages: </span>
            {Object.values(country.languages).join(", ")}
          </p>

          {/* Back Button */}
          <NavLink to="/country">
            <button className="mt-6 px-6 py-2 bg-gray-100 hover:bg-gray-700 text-black rounded shadow hover:text-white duration-300 c">
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
