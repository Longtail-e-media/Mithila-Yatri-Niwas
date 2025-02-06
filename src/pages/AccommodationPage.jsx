import React from "react";

import {
  withDataFetching,
  PackageSlider,
  BreadCrumb,
  RoomAmenities,
  Reservation,
  PackageList,
} from "../constants/data";
import Meta from "../utils/Meta";

const AccommodationPage = ({ data: accommodationContents }) => {
  const {
    title,
    description,
    roomsCategories,
    meta_keywords,
    meta_description,
  } = accommodationContents[0];
  const [activeRoom, setActiveRoom] = React.useState(roomsCategories[0]);

  const handleRoomClick = (roomId) => {
    const selectedRoom = roomsCategories.find((room) => room.id === roomId);
    setActiveRoom(selectedRoom);
  };

  return (
    <>
      <Meta
        title={`${title} - Mithila Yatri Niwas`}
        keywords={meta_keywords}
        description={meta_description}
        canonicalUrl="https://mithilayatriniwas.com/accommodation"
      />
      <div className="responsive-banner relative overflow-hidden">
        <PackageSlider
          contents={roomsCategories}
          sizeClassName="w-full h-full lg:h-screen"
        />
        <BreadCrumb page="Accommodation" />
      </div>

      <section className="bg-custom-white">
        <div className="text-center mb-16 container max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl">{title}</h2>
          <p className="text-sm md:text-base text-gray-600 mt-4">
            {description}
          </p>
        </div>

        <PackageList
          contents={roomsCategories}
          onItemClick={handleRoomClick}
          type="accommodation"
        />

        <RoomAmenities
          amenities={activeRoom.roomAmenities}
          amenitiesTitle="Room Amenities"
        />

        <Reservation />
      </section>
    </>
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
)(AccommodationPage);
