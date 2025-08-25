import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className="container mx-auto text-white ">
      <div className="mt-40 max-lg:mt-15 p-4 ">
        <div className="flex justify-between gap-10 max-lg:flex-col-reverse max-lg:gap-10">
          <div className=" ">
            <h1 className="text-6xl font-white font-bold leading-16 max-md:text-4xl max-md:leading-12 max-md:tracking-tight">
              Explore the World, One Country at a time.
            </h1>
            <p className="my-10 text-xl font-medium leading-8 max-md:text-lg max-md:leading-7 max-md:my-7">
              Discover the history, culture, and beauty of every nation. Sort,
              search, and filter through countries to find the details you need.
            </p>
            <button className="flex gap-2 items-center justify-center font-normal cursor-pointer bg-[#202020] text-center px-6 py-1 text-[#fff] rounded-xl border border-solid">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </div>
          <div>
            <img src="/images/world.png" alt="" className="w-[1050px]" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
