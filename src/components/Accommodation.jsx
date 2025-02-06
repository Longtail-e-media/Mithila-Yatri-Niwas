import React from "react";
import { withDataFetching } from "../constants/data";
import PackageHome from "./ui/PackageHome";

const Accommodation = ({ data: accommodationContents }) => {
  const { title, description, roomsCategories } = accommodationContents[0];
  const { booking } = roomsCategories[0];
  const roomAmenities = roomsCategories[0].roomAmenities;

  return (
    <PackageHome
      title={title}
      description={description}
      amenities={roomAmenities}
      sliderContents={roomsCategories}
      buttonTitle="Booking"
      buttonRouter={booking}
      contentClassName="order-1"
      sliderClassName="order-2"
    />
  );
};

const transformAccommodationContents = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return accommodationContents;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_room.php",
  transformAccommodationContents
)(Accommodation);
