import React from "react";
import IconRenderer from "./IconRenderer";

const PackageContent = ({ room }) => {
  if (!room) return null;

  return (
    <div className="">
      <h3 className="text-3xl text-custom-black">{room.title}</h3>
      <p className="text-base text-gray-600 mt-4 text-justify">
        {room.description}
      </p>
      <hr className="border-custom-black/20 mt-4" />

      {room.informations &&
        room.informations.length > 0 &&
        room.informations.map((infoCategory) => (
          <div key={infoCategory.title}>
            <h5 className="text-3xl text-custom-black mt-12 mb-6">
              {infoCategory.title}
            </h5>
            <ul>
              {Object.entries(infoCategory.data).map(([infoKey, infoValue]) => (
                <li
                  key={infoKey}
                  className="flex items-left justify-left flex-col py-2"
                >
                  <span className="flex items-center gap-2 text-gray-600">
                    {/* {typeof infoValue.icon === "function" ? (
                      <infoValue.icon className="text-xl mr-2" />
                    ) : (
                      <img
                        src={infoValue.icon}
                        alt={infoKey}
                        className="w-8 h-8 mr-2 p-1"
                      />
                    )} */}
                    <IconRenderer
                      iconName={
                        infoValue.icon.includes("http") ? null : infoValue.icon
                      }
                      iconPath={
                        infoValue.icon.includes("http") ? infoValue.icon : null
                      }
                      className="text-xl mr-2"
                      alt={infoValue}
                    />
                    <span className="font-bold">{infoKey}: </span>
                    {infoValue.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

      <hr className="border-custom-black/20 mt-4" />

      {room.facilities &&
        room.facilities.length > 0 &&
        room.facilities.map((facilityCategory) => (
          <div key={facilityCategory.title}>
            <h5 className="text-3xl leading-loose mt-12 mb-6">
              {facilityCategory.title}
            </h5>
            <ul className="list-decimal ml-4">
              {Array.isArray(facilityCategory.content) &&
                facilityCategory.content.map((facility, index) => (
                  <li key={index} className="mb-2 text-gray-600">
                    {facility}
                  </li>
                ))}
            </ul>
          </div>
        ))}

      <hr className="border-custom-black/20 mt-4" />

      {room.policies &&
        room.policies.length > 0 &&
        room.policies.map((policyCategory) => (
          <div key={policyCategory.title}>
            <h5 className="text-3xl leading-loose mt-12 mb-6">
              {policyCategory.title}
            </h5>
            <ul className="list-decimal ml-4">
              {Array.isArray(policyCategory.content) &&
                policyCategory.content.map((policy, index) => (
                  <li key={index} className="mb-2 text-gray-600">
                    {policy}
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default PackageContent;
