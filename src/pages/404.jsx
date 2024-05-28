import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import notFound from "../assets/graphics/404.svg";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center -mt-40 bg-alt-bg">
      <img
        src={notFound}
        alt="Not Found"
        className="w-auto h-80 object-contain rounded-lg"
      />
      <h3 className="text-4xl font-bold mt-12 mb-4">
        Oh no... We lost this page
      </h3>
      <p className="text-lg text-gray-600 mb-8">
        We searched everywhere but couldn't find what you're looking for. Let's
        find a better place for you to go.
      </p>
      <button
        onClick={() => window.history.back()}
        className="w-auto group flex items-center justify-center gap-2 hover:bg-alt-logo-clr hover:text-custom-white bg-logo-clr text-custom-white px-6 py-2 rounded-full text-base transition-all duration-300 ease-linear"
      >
        <HiArrowLongLeft className="group-hover:scale-x-[2] group-hover:-translate-x-1 transition-all duration-150 ease-linear" />
        Go Back
      </button>
    </section>
  );
};

export default NotFound;
