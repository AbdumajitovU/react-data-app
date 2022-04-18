import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mx-auto mt-[-96px] h-screen w-full text-center flex flex-col justify-center">
        <p className="text-[#61DBFB] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center space-x-2 md:space-x-3">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-gray-500"
            strings={["BTB", "BTC", "SASS", "ETH!"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#61DBFB] hover:bg-[#219bb9] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
