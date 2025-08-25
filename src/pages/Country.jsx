import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import CountryCard from "../components/Layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";
import CircularProgress from "@mui/material/CircularProgress";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
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

  console.log(search, filter);
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterCountry = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterCountry(country)
  );

  return (
    <section className="container text-white px-6 py-8 bg-[#000000] min-h-screen mx-auto">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8  mx-auto">
        {filterCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
