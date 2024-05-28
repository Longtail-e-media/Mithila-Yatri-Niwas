import React from "react";

import { offersContents, SvgWave, OffersSlider } from "../constants/data";

const Offers = () => {
  return (
    <>
      {/* <section className="bg-gradient-to-b from-logo-bg to-alt-bg px-10"> */}
      <section className="bg-alt-bg px-10">
        <SvgWave />
        <div className="absolute left-0 bottom-0 w-full h-16 bg-[url('/src/assets/logo-graphics.svg')] bg-contain bg-repeat-x mix-blend-luminosity opacity-80 -z-20" />
        <div className="text-center mb-12 container max-w-6xl mx-auto">
          <h2 className="text-3xl text-primary">Offers</h2>
          <p className="text-base text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            pariatur odit reiciendis quae quod, accusamus quos, consectetur
            ipsum cum excepturi rem ea labore perspiciatis animi qui nesciunt a
            deserunt voluptas alias aliquam vero expedita enim ab assumenda!
            Beatae, mollitia qui unde temporibus dolorum architecto maiores, ut
            corrupti nemo facilis quos?
          </p>
          {/* <LearnMore
              text="Explore"
              primaryColor="bg-logo-clr"
              secondaryColor="bg-alt-logo-clr"
            /> */}
        </div>
        <div className="">
          <OffersSlider contents={offersContents} />
        </div>
      </section>
    </>
  );
};

export default Offers;
