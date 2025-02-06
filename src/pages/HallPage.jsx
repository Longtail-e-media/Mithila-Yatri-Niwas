import React, { useState } from "react";
import {
  withDataFetching,
  PackageSlider,
  BreadCrumb,
  RoomAmenities,
  Reservation,
  PackageList,
} from "../constants/data";
import Meta from "../utils/Meta";

const HallPage = ({ data: hallContents }) => {
  const {
    title,
    description,
    hallCategories,
    meta_keywords,
    meta_description,
  } = hallContents[0];
  const [activeHall, setActiveHall] = useState(hallCategories[0]);

  const handleHallClick = (hallId) => {
    const selectedHall = hallCategories.find((hall) => hall.id === hallId);
    setActiveHall(selectedHall);
  };

  return (
    <>
      <Meta
        title={`${title} - Mithila Yatri Niwas`}
        keywords={meta_keywords}
        description={meta_description}
        canonicalUrl="https://mithilayatriniwas.com/hall"
      />
      <div className="responsive-banner relative overflow-hidden">
        <PackageSlider
          contents={hallCategories}
          sizeClassName="w-full h-full lg:h-screen"
        />
        <BreadCrumb page="Occasions" />
      </div>

      <section className="bg-custom-white">
        <div className="text-center mb-16 container max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl">{title}</h2>
          <p className="text-sm md:text-base text-gray-600 mt-4">
            {description}
          </p>
        </div>

        <PackageList
          contents={hallCategories}
          onItemClick={handleHallClick}
          type="hall"
        />

        <RoomAmenities
          amenities={activeHall.hallAmenities}
          amenitiesTitle="Hall Amenities"
        />

        <Reservation />
      </section>
    </>
  );
};

const transformHallContents = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return hallContents;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_occasions.php",
  transformHallContents
)(HallPage);
