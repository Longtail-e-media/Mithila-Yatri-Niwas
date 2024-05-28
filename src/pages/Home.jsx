import React from "react";
import {
  Hero,
  About,
  History,
  Accommodation,
  Dine,
  MithilaThali,
  Hall,
  Testimonials,
  PlacesToVisit,
} from "../constants/data";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Direction /> */}
      {/* <Janaki /> */}
      <History />
      <Accommodation />
      <Dine />
      <MithilaThali />
      <Hall />
      <Testimonials />
      {/* <Offers /> */}
      <PlacesToVisit />
    </>
  );
};

export default Home;
