import React from "react";
import { Button, SvgWave, RoomSlider } from "../../constants/data";

const PackageHome = ({
  title,
  description,
  amenities,
  sliderContents,
  buttonTitle,
  buttonRouter,
  contentClassName,
  sliderClassName,
}) => {
  return (
    <section className="bg-alt-bg md:px-10 z-10 relative overflow-hidden">
      <SvgWave />

      <div
        className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/pattern-mandala.avif')] bg-repeat -z-20 mix-blend-multiply opacity-30`}
      />
      <div className="absolute right-0 top-64 w-80 h-96 bg-[url('/src/assets/graphics/ram.svg')] bg-contain bg-no-repeat mix-blend-overlay -z-10 opacity-70 -rotate-90" />

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`col-span-1 md:col-span-1 ${contentClassName}`}>
            <h2 className="text-3xl">{title}</h2>
            <p className="text-base text-gray-600 mt-4">{description}</p>
            <h3 className="text-3xl mt-8 mb-6">Amenities</h3>
            <div className="flex items-start gap-20 h-60 overflow-y-auto ">
              <ul className="flex items-start justify-center flex-col gap-4">
                {amenities &&
                  amenities.map(({ icon: Icon, title }) => (
                    <li
                      key={title}
                      className="flex items-center gap-4 text-gray-600 capitalize"
                    >
                      {typeof Icon === "function" ? (
                        <Icon className="text-xl mr-2" />
                      ) : (
                        <img
                          src={Icon}
                          alt={title}
                          className="w-8 h-8 mr-2 p-1"
                        />
                      )}
                      {title}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="my-8">
              <Button title={buttonTitle} router={buttonRouter} />
            </div>
          </div>

          <div
            className={`home-accommodation col-span-1 lg:col-span-2 mx-4 md:mx-0 ${sliderClassName}`}
          >
            <RoomSlider contents={sliderContents} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageHome;
