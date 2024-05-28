import React from "react";
import { accommodationContents } from "../constants/data";
import PackageHome from "./ui/PackageHome";

const Accommodation = () => {
  const { title, description, roomsCategories } = accommodationContents[0];

  const roomAmenities = roomsCategories[0].roomAmenities;

  return (
    <PackageHome
      title={title}
      description={description}
      amenities={roomAmenities}
      sliderContents={roomsCategories}
      buttonTitle="Booking"
      buttonRouter="https://www.mithilayatriniwas.com/result.php?hotel_code=gBRaLW"
      contentClassName="order-1"
      sliderClassName="order-2"
    />
  );
};

export default Accommodation;
