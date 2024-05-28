import React from "react";
import NearbyMapComponent from "./ui/NearbyMapComponent";
import { SvgWave } from "../constants/data";

const Direction = () => {
  return (
    <>
      <section className="bg-alt-bg">
        <SvgWave />
        <div
        className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/pattern-mandala.avif')] bg-repeat -z-20 mix-blend-multiply opacity-30`}
      />
        <div className="text-center mb-12 container max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl">Nearby Location</h2>
          <p className="text-sm md:text-base text-justify md:text-center text-gray-600 mt-4">
            Discover the charm of proximity with Nearby Location, your gateway
            to local treasures. Uncover hidden gems and popular spots, all just
            a stone's throw away. It's your personal compass for adventure,
            leisure, and everything in between.
          </p>
        </div>
        <NearbyMapComponent />
      </section>
    </>
  );
};

export default Direction;
