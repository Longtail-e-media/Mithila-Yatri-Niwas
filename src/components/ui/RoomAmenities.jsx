import React from "react";
import IconRenderer from "./IconRenderer";

const RoomAmenities = ({ amenities, amenitiesTitle }) => {
  return (
    <div className="container py-12 md:my-32 p-0">
      <h4 className="text-3xl text-center my-8">{amenitiesTitle}</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mt-24">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex items-center flex-col gap-4 p-4 text-center"
          >
            <IconRenderer
              iconName={amenity.icon.includes("http") ? null : amenity.icon}
              iconPath={amenity.icon.includes("http") ? amenity.icon : null}
              className="text-2xl text-alt-logo-clr"
              alt={amenity.title}
            />
            <p className="text-xs md:text-xs xl:text-base">{amenity.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomAmenities;
