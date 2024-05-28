import React from "react";
import { hallContents } from "../constants/data";
import PackageHome from "./ui/PackageHome";

const Hall = () => {
  const { title, description, hallCategories } = hallContents[0];

  const hallAmenities = hallCategories[0].hallAmenities;

  return (
    <PackageHome
      title={title}
      description={description}
      amenities={hallAmenities}
      sliderContents={hallCategories}
      buttonTitle="Reserve"
      buttonRouter="/enquiry-form#enquiry-form"
      contentClassName="md:order-2"
      sliderClassName="md:order-1"
    />
  );
};

export default Hall;
