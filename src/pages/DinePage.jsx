import React from "react";
import {
  dineContents,
  PackageSlider,
  BreadCrumb,
  RoomAmenities,
  Reservation,
  PackageList,
} from "../constants/data";
import { Link } from "react-router-dom";

const DinePage = () => {
  const { title, description, dineCategories } = dineContents[0];

  return (
    <>
      <div className="responsive-banner relative overflow-hidden">
        <PackageSlider
          contents={dineCategories}
          sizeClassName="w-full h-full lg:h-screen"
        />
        <BreadCrumb page="Dine" />
      </div>

      <section className="bg-custom-white">
        <div className="text-center mb-16 container max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl">{title}</h2>
          <p className="text-sm md:text-base text-gray-600 mt-4">
            {description}
          </p>
          <div className="mt-8 w-full">
            <Link
              to="#menu"
              className="font-title text-custom-white bg-alt-logo-clr hover:bg-logo-clr px-6 py-2 rounded-full transition-linear group"
            >
              View Menu
            </Link>
          </div>
        </div>

        <PackageList contents={dineCategories} />

        <RoomAmenities
          amenities={dineCategories[0].dineAmenities}
          amenitiesTitle="Dine Amenities"
        />

        <Reservation />
      </section>
    </>
  );
};

export default DinePage;
