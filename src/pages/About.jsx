import React from "react";
import countryData from "../api/countryData.json";

const About = () => {
  return (
    <section className="container mx-auto text-white my-2  min-h-screen py-16 px-4 ">
      <h2 className="text-center text-4xl leading-12 text-white font-bold mb-10">
        Here are the Intresting Facts <br />
        we're proud of
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {countryData.map((country) => {
          const { id, country_name, capital, population, interesting_fact } =
            country;
          return (
            <div key={id}>
              <div className="bg-[linear-gradient(71deg,_#080509,_#1a171c,_#080509)] rounded-xl  p-6 shadow-md border border-gray-700 hover:shadow-xl transition-all duration-300 rounded-tl-[40px] rounded-br-[40px]">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {country_name}
                </h2>
                <p className="text-white mb-1 text-sm">
                  <span className="font-medium text-neutral-400">
                    Capital :{" "}
                  </span>
                  {capital}
                </p>
                <p className="text-white mb-1 text-sm">
                  <span className="font-medium text-neutral-400">
                    Population :{" "}
                  </span>
                  {population}
                </p>
                <p className="text-white mb-1 text-sm">
                  <span className="font-medium text-neutral-400">
                    Interesting Fact :{" "}
                  </span>
                  {interesting_fact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
