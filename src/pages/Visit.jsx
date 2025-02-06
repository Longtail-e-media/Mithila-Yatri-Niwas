import React from "react";
import { Direction, withDataFetching } from "../constants/data";
import Meta from "../utils/Meta";

const Visit = ({ data: placesToVistContents }) => {
  return (
    <>
      <Meta
        title="Places To Visit | Mithila Yatri Niwas"
        meta_description="Discover the charm of proximity with Nearby Location, your gateway to local treasures. Uncover hidden gems and popular spots, all just a stone's throw away. It's your personal compass for adventure, leisure, and everything in between."
        canonicalUrl="https://mithilayatriniwas.com/places-to-visit"
      />
      <section className="bg-logo-bg responsive-banner">
        <div
          className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/pattern-mandala.avif')] bg-repeat -z-10 mix-blend-multiply opacity-20`}
        />
        <div className="container">
          <div className="text-center my-16 max-w-5xl mx-auto">
            <h2 className="text-3xl">Places To Visit</h2>
            <p className="text-base text-gray-600 mt-4">
              Discover the charm of proximity with Nearby Location, your gateway
              to local treasures. Uncover hidden gems and popular spots, all
              just a stone's throw away. It's your personal compass for
              adventure, leisure, and everything in between.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 pt-8">
            {placesToVistContents.map((offer, index) => (
              <div
                key={offer.id}
                id={offer.id}
                className={`flex flex-col md:flex-row items-center justify-center md:gap-16 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 p-2 md:p-0">
                  <img
                    src={offer.icon}
                    alt={offer.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
                <div className="md:flex-1 px-4 h-64 lg:h-80 overflow-y-auto">
                  <h3 className="text-xl font-medium mb-2 sticky top-0 pt-8 md:pt-4  pb-2 bg-logo-bg">
                    {offer.title}
                  </h3>
                  {offer.description.split("<br/>").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm md:text-base text-gray-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Direction />
    </>
  );
};

const transformPlacesToVistContents = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return placesToVistContents;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_placestovisit.php",
  transformPlacesToVistContents
)(Visit);
