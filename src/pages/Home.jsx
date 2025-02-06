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
import Popup from "../components/Popup";

const Home = () => {
  return (
    <>
    <Popup />
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
