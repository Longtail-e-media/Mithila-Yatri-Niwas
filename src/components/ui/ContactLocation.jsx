import React from "react";
import LocationDetails from "./LocationDetails";
import Socials from "./Socials";
import { mithilaNight } from "../../constants/data";
import { withDataFetching } from "../../constants/data";

const ContactLocation = ({ data: siteRegulars }) => {
  const { sitetitle, breif, contact_upload } = siteRegulars;
  return (
    <>
      <div className="bg-[#011c2b] rounded-xl max-lg:text-center px-6 py-12 relative z-10">
        <img
          src={mithilaNight}
          alt="Mithila Yatri Niwas"
          className="w-full h-full absolute inset-0 object-cover -z-10 rounded-xl"
        />
        <div className="w-full h-full absolute inset-0 -z-10 bg-black/80 rounded-xl" />
        <h2 className="text-xl font-bold text-white">{sitetitle}</h2>
        <p className="text-sm text-pretty text-gray-300 mt-3">
            {breif}
        </p>

        <div className="my-6">
          <LocationDetails alignClassName="justify-center lg:justify-start" />
        </div>

        <div className="mt-8 flex items-center justify-center lg:justify-start">
          <Socials />
        </div>
      </div>
    </>
  );
};

const transformLogo = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return siteRegulars;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_siteregulars.php",
  transformLogo
)(ContactLocation);
