import React from "react";
import {
  SvgWave,
  PlacesToVisitSlider,
  withDataFetching,
} from "../constants/data";

const PlacesToVisit = ({ data: placesToVistContents }) => {
  return (
    <>
      {/* <section className="bg-gradient-to-b from-logo-bg to-alt-bg px-10"> */}
      <section className="bg-alt-bg md:px-10">
        <SvgWave />
        <div className="bg-fixed absolute inset-0 size-full bg-[url('/src/assets/graphics/flowers.webp')] bg-contain bg-repeat mix-blend-multiply opacity-10 -z-20" />

        <div className="absolute left-0 bottom-0 w-full h-16 bg-[url('/src/assets/logo-graphics.svg')] bg-contain bg-repeat-x mix-blend-luminosity opacity-80 -z-20" />
        <div className="text-center mb-12 container max-w-6xl mx-auto">
          <h2 className="text-3xl text-primary">Places to Visit</h2>
          <p className="text-base text-gray-600 mt-4">
            Discover the charm of proximity with Nearby Location, your gateway
            to local treasures. Uncover hidden gems and popular spots, all just
            a stone's throw away. It's your personal compass for adventure,
            leisure, and everything in between.
          </p>
          {/* <LearnMore
              text="Explore"
              primaryColor="bg-logo-clr"
              secondaryColor="bg-alt-logo-clr"
            /> */}
        </div>
        <div className="px-3">
          <PlacesToVisitSlider
            contents={placesToVistContents}
            router="/places-to-visit"
          />
        </div>
      </section>
    </>
  );
};

const transformPlacesToVistContents = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return placesToVistContents;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_placestovisit.php",
  transformPlacesToVistContents
)(PlacesToVisit);
