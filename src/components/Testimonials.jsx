import React from "react";

import {
  testimonialsContent,
  SvgWave,
  LearnMore,
  TestimonialsSlider,
} from "../constants/data";

const Testimonials = () => {
  return (
    <>
      {/* <section className="bg-gradient-to-b from-logo-bg to-alt-bg px-10"> */}
      <section className="bg-logo-bg md:px-10">
        <SvgWave />
        <div
          className={`bg-fixed absolute inset-0 h-full w-full bg-[url('https://img.freepik.com/free-vector/mexican-bar-pattern-design_23-2150680012.jpg?t=st=1715836701~exp=1715840301~hmac=04bf4da2d63aa487f1230929443056e1eaedf1675e4c84039492c88a38cd303a&w=740')] bg-repeat -z-20 mix-blend-multiply opacity-5`}
        />
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-1 md:col-span-1 text-center lg:text-left mt-4 mb-8 lg:m-0 lg:mr-8">
              <h2 className="text-3xl">Testimonials</h2>
              <p className="text-base text-gray-600 mt-4 mb-8">
                Experience and immerse in Nepal's religious, cultural and
                historical heritage, with all the modern comforts and amenities
                while avoiding the hustle and bustle of Janakpur.
              </p>
              {/* <LearnMore
                text="Explore"
                primaryColor="bg-logo-clr"
                secondaryColor="bg-alt-logo-clr"
              /> */}
            </div>
            <div className="col-span-2 md:col-span-2 px-3">
              <TestimonialsSlider contents={testimonialsContent} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
