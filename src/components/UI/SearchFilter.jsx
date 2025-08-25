import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const sortCountry = (value) => {
    const sortCountries = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountries);
  };

  return (
    <section className="container mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 py-6 px-10 max-md:px-4 max-md:py-2">
      {/* Search Box */}
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleInputChange}
          className="bg-transparent border border-gray-500 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Sort Asc Button */}
      <div>
        <button
          onClick={() => sortCountry("asc")}
          className="px-4 py-2 border border-gray-500 text-white rounded-full hover:bg-gray-700 transition duration-300 cursor-pointer"
        >
          Asc
        </button>
      </div>

      {/* Sort Desc Button */}
      <div>
        <button
          onClick={() => sortCountry("des")}
          className="px-4 py-2 border border-gray-500 text-white rounded-full hover:bg-gray-700 transition duration-300 cursor-pointer"
        >
          Desc
        </button>
      </div>

      {/* Filter Dropdown */}
      <div>
        <select
          value={filter}
          onChange={handleSelectChange}
          className="bg-transparent border border-gray-500 text-white px-4 py-2 rounded-full focus:outline-none"
        >
          <option className="bg-[#121212]" value="all">
            All
          </option>
          <option className="bg-[#121212]" value="Africa">
            Africa
          </option>
          <option className="bg-[#121212]" value="Americas">
            Americas
          </option>
          <option className="bg-[#121212]" value="Asia">
            Asia
          </option>
          <option className="bg-[#121212]" value="Europe">
            Europe
          </option>
          <option className="bg-[#121212]" value="Oceania">
            Oceania
          </option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
