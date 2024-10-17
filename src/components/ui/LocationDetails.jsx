import React from "react";
import { locationDetails, withDataFetching } from "../../constants/data";
import { Link } from "react-router-dom";
import IconRenderer from "./IconRenderer";

const LocationDetails = ({ data: locationDetails, alignClassName }) => {
  return (
    <>
      <ul className="col-span-1 flex flex-col gap-4">
        {locationDetails.map((link, index) => (
          <li
            key={index}
            className={`text-xs md:text-sm lg:text-base flex items-center ${alignClassName} gap-2 text-custom-white hover:scale-105 hover:text-white transition-linear`}
          >
            {/* {typeof link.icon === "function" ? (
              <link.icon className="text-xs md:text-sm lg:text-base" />
            ) : (
              <img src={link.icon} alt={link.title} className="w-8 h-8" />
            )} */}
            <IconRenderer
              iconName={link.icon}
              className="text-xs md:text-sm lg:text-base"
            />
            <Link to={link.url} target="_blank" rel="noopener">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const transformLocationDetails = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return locationDetails;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_location.php",
  transformLocationDetails
)(LocationDetails);
