import React from "react";
import {
  aboutContents,
  SvgWave,
  AboutGallery,
  LearnMore,
  namaste,
  rojai,
} from "../constants/data";
import { Link } from "react-router-dom";

const About = () => {
  const { text, galleryImages } = aboutContents;

  const { heading, paragraph, subheading, book } = text;

  return (
    <>
      <section className="bg-logo-bg overflow-hidden">
        <SvgWave />
        {/* <div className="absolute right-0 top-40 w-80 h-96 bg-[url('/src/assets/graphics/sitaram.webp')] bg-contain bg-no-repeat mix-blend-darken opacity-40 -z-10" /> */}
        <div className="absolute left-0 bottom-0 w-full h-12 md:h-20 bg-[url('/src/assets/logo-graphics.svg')] bg-contain bg-repeat-x opacity-40 -z-10" />
        <div
          className={`absolute inset-0 h-full w-full bg-[url('https://img.freepik.com/free-vector/mexican-bar-pattern-design_23-2150680012.jpg?t=st=1715836701~exp=1715840301~hmac=04bf4da2d63aa487f1230929443056e1eaedf1675e4c84039492c88a38cd303a&w=740')] bg-repeat -z-20 mix-blend-multiply opacity-5`}
        />
        <div className="container">
          <img
            src={namaste}
            alt="Mithila art greeting Namaste"
            className="size-40 sm:size-48 md:size-64 mx-auto mix-blend-luminosity"
          />
          <div className="space-y-6 text-center text-custom-black">
            <h2 className="w-full md:px-32 mx-auto text-lg md:text-[2.25rem] leading-snug">
              {heading}
            </h2>
            <p className="w-full md:w-11/12 mx-auto text-sm md:text-lg text-justify md:text-center text-custom-black/80">
              {paragraph}
            </p>

            <h3 className="capitalize text-base sm:text-base md:text-xl font-bold tracking-wider [word-spacing:3px]">
              {subheading}
              <Link
                to={rojai}
                target="_blank"
                className="underline underline-offset-4 hover:underline-offset-2 font-title text-logo-clr hover:underline duration-300 transition-linear"
              >
                {book}
              </Link>
            </h3>
          </div>

          <div className="mt-16">
            <AboutGallery images={galleryImages} />
          </div>

          <div className="flex items-center justify-center my-8">
            <LearnMore
              text="Explore"
              primaryColor="bg-alt-logo-clr"
              secondaryColor="bg-logo-clr"
              router="/about"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
