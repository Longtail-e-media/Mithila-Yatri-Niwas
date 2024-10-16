
import React, { useState, useRef } from "react";
import { withDataFetching } from "../../constants/data";

const NearbyMapComponent = ({ data: nearbyLocations }) => {
  const [isMapOpen, setIsMapOpen] = useState(true);
  const [mapUrl, setMapUrl] = useState(nearbyLocations[0]?.map || "");
  const [selectedLocation, setSelectedLocation] = useState(
    nearbyLocations[0] || null
  );
  const mapRef = useRef(null);

  const openMapModal = (url, location) => {
    setMapUrl(url);
    setSelectedLocation(location);
    setIsMapOpen(true);
    const mapSection = document.getElementById("mapSection");
    mapSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    openMapModal(location.map, location);
  };

  const totalLocations = nearbyLocations.length;
  const halfLocations = Math.ceil(totalLocations / 2);

  const leftLocations = nearbyLocations.slice(0, halfLocations);
  const rightLocations = nearbyLocations.slice(halfLocations);

  return (
    <div className="flex justify-between items-center flex-col lg:flex-row mt-20">
      <div className="w-full lg:w-1/5 order-1">
        <ul>
          {leftLocations.map((location) => (
            <li
              key={location.name}
              className="mb-4 cursor-pointer text-left text-sm lg:text-base "
              onClick={() => handleLocationClick(location)}
            >
              <span className="font-bold">{location.name}</span>
              <span className="ml-2">{location.distance}</span>
              <br />
              <button
                className="font-body font-bold text-logo-clr"
                onClick={(e) => {
                  e.preventDefault();
                  handleLocationClick(location);
                }}
              >
                Get Direction
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="w-full lg:w-4/5 my-8 lg:m-0 lg:p-8 order-3 lg:order-2"
        ref={mapRef}
      >
        {isMapOpen && (
          <div
            id="mapSection"
            className="relative bg-ivory w-full rounded-lg scroll-mt-32"
          >
            <iframe
              title="Map"
              src={mapUrl}
              className="w-full h-64 md:h-96 lg:h-[60vh] rounded-lg shadow-lg"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
      <div className="w-full lg:w-1/5 order-2 lg:order-3">
        <ul>
          {rightLocations.map((location) => (
            <li
              key={location.name}
              className="mb-4 cursor-pointer lg:text-right text-sm lg:text-base"
              onClick={() => handleLocationClick(location)}
            >
              <span className="font-bold">{location.name}</span>
              <span className="ml-2">{location.distance}</span>
              <br />
              <button
                className="font-body font-bold text-logo-clr"
                onClick={(e) => {
                  e.preventDefault();
                  handleLocationClick(location);
                }}
              >
                Get Direction
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// const transformNearbyData = (data) => {
//   return JSON.parse(data);
// };

const transformNearbyData = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return nearbyLocations;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_nearby.php",
  transformNearbyData
)(NearbyMapComponent);
