import React from "react";
import { Link } from "react-router-dom";
import { TbBookmarkPlus } from "react-icons/tb";
import withDataFetching from "../../hoc/withDataFetching";

const Rojai = ({ rojaiClassName, data: siteRegulars }) => {
  const { booking_code } = siteRegulars;

  return (
    <>
      <Link
        to={booking_code}
        target="_blank"
        rel="noopener noreferrer"
        className={`${rojaiClassName}`}
      >
        Booking
        <TbBookmarkPlus className="text-custom-white text-xl group-hover:text-2xl transition-all duration-300 ease-linear" />
      </Link>
    </>
  );
};

const transformRojai = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return siteRegulars;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_siteregulars.php",
  transformRojai
)(Rojai);
