import React from "react";
import { withDataFetching } from "../constants/data";
import PackageHome from "./ui/PackageHome";

const Hall = ({ data: hallContents }) => {
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
)(Hall);
