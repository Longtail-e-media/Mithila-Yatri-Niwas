import React from "react";
import { Link } from "react-router-dom";

const Slider = ({ contents }) => {
  return (
    <>
      <div className="flex items-center gap-8">
        {contents.map(({ id, title, description, icon, router }) => (
          <div key={id} className="relative overflow-hidden group h-[80vh]">
            <img
              src={icon}
              alt={title}
              className="w-full h-full shadow-md transition duration-700 ease-in-out transform group-hover:scale-150 object-cover"
            />
            <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.4)] w-full h-full"></div>
            <div className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] bg-opacity-75 text-white text-center transition-all duration-700 ease-in-out transform translate-y-1/2 group-hover:translate-y-0">
              <div className="p-4">
                <h3 className="text-3xl font-medium mb-24 group-hover:mb-0 transition-all duration-300">
                  {title}
                </h3>
                <p className="text-ivory my-4">{description}</p>
                <Link
                  to={router}
                  className="text-ivory bg-transparent border border-solid border-white px-4 py-2 mt-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;
