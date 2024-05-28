import React from "react";
import PackageSlider from "../components/ui/PackageSlider";

import room1 from "../assets/rooms/room1.webp";
import room2 from "../assets/rooms/room2.webp";
import room3 from "../assets/rooms/room3.webp";
import BreadCrumb from "./ui/BreadCrumb";
import RoomAmenities from "./ui/RoomAmenities";
import Reservation from "./ui/Reservation";

import { IoBed, IoPricetagSharp } from "react-icons/io5";
import { IoMdResize } from "react-icons/io";
import { GiBowlOfRice } from "react-icons/gi";
import { IoMdClock } from "react-icons/io";

import PackageList from "./PackageList";

const PackageComponent = () => {
  const roomsCategories = [
    {
      id: 1,
      title: "Deluxe Room",
      description:
        "Comfortable and homely for relaxation with view of our garden, the lake or the Janaki Temple some distance away. All our 18 Deluxe Rooms are designed keeping in mind your needs but nothing in excess. These rooms are opulently designed and decorated for comfort of our guests.",
      image: [
        {
          src: room1,
          alt: "Deluxe Room",
        },
      ],
      router: "/accommodation/deluxe-room",
      booking: "https://www.mithilayatriniwas.com/result.php?hotel_code=gBRaLW",
      informations: [
        {
          title: "Informations",
          data: {
            "Total Rooms": { icon: IoBed, value: "18 rooms" },
            Price: { icon: IoPricetagSharp, value: "Starting USD 40" },
            "Room Size": { icon: IoMdResize, value: "205 sq. ft." },
            "Rate plan": { icon: GiBowlOfRice, value: "Bed & Breakfast" },
            "Check-in/out": { icon: IoMdClock, value: "1pm - 12 noon" },
          },
        },
      ],
      facilities: [
        {
          title: "Facilities",
          content: [
            "Welcome drink (non-alcoholic) on arrival.",
            "Tea/Coffee maker in room with sachet.",
            "Iron and Ironing board in the room on request.",
            "Free internet access throughout the stay in the room.",
            "Two mineral water bottles (1000ml) every day in the room.",
          ],
        },
      ],
      policies: [
        {
          title: "Policies",
          content: [
            "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
            "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
            "Breakfast - USD $8/ INR 500.",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Executive Room",
      description:
        "Comfortable and homely for relaxation with view of our garden, the lake or the Janaki Temple some distance away. All our 10 Executive Rooms are designed keeping in mind your needs but nothing in excess. These rooms are opulently designed and decorated for comfort of our guests.",
      image: [
        {
          src: room2,
          alt: "Deluxe Room",
        },
      ],
      router: "/accommodation/executive-room",
      booking: "https://www.mithilayatriniwas.com/result.php?hotel_code=gBRaLW",
      informations: [
        {
          title: "Informations",
          data: {
            "Total Rooms": { icon: IoBed, value: "10 rooms" },
            Price: { icon: IoPricetagSharp, value: "Starting USD 50" },
            "Room Size": { icon: IoMdResize, value: "215 sq. ft." },
            "Rate plan": { icon: GiBowlOfRice, value: "Bed & Breakfast" },
            "Check-in/out": { icon: IoMdClock, value: "1pm - 12 noon" },
          },
        },
      ],
      facilities: [
        {
          title: "Facilities",
          content: [
            "Welcome drink (non-alcoholic) on arrival.",
            "Tea/Coffee maker in room with sachet.",
            "Iron and Ironing board in the room on request.",
            "Free internet access throughout the stay in the room.",
            "Two mineral water bottles (1000ml) every day in the room.",
          ],
        },
      ],
      policies: [
        {
          title: "Policies",
          content: [
            "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
            "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
            "Breakfast - USD $8/ INR 500.",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Suite Room",
      description:
        "Comfortable and homely for relaxation with view of our garden, the lake or the Janaki Temple some distance away. All our 2 Suite Rooms are designed keeping in mind your needs but nothing in excess. These rooms are opulently designed and decorated for comfort of our guests.",
      image: [
        {
          src: room3,
          alt: "Deluxe Room",
        },
      ],
      router: "/accommodation/suite-room",
      booking: "https://www.mithilayatriniwas.com/result.php?hotel_code=gBRaLW",
      informations: [
        {
          title: "Informations",
          data: {
            "Total Rooms": { icon: IoBed, value: "2 rooms" },
            Price: { icon: IoPricetagSharp, value: "Starting USD 60" },
            "Room Size": { icon: IoMdResize, value: "215 sq. ft." },
            "Rate plan": { icon: GiBowlOfRice, value: "Bed & Breakfast" },
            "Check-in/out": { icon: IoMdClock, value: "1pm - 12 noon" },
          },
        },
      ],
      facilities: [
        {
          title: "Facilities",
          content: [
            "Fruits Basket and VIP Amenities on room.",
            "Welcome drink (non-alcoholic) on arrival.",
            "Tea/Coffee maker in room with sachet.",
            "Iron and Ironing board in the room on request.",
            "Free internet access throughout the stay in the room.",
            "Two mineral water bottles (1000ml) every day in the room.",
          ],
        },
      ],
      policies: [
        {
          title: "Policies",
          content: [
            "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
            "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
            "Breakfast - USD $8/ INR 500.",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className="responsive-banner">
        <PackageSlider
          contents={roomsCategories}
          sizeClassName="w-full h-screen"
        />
        <BreadCrumb page="Accommodation" />
      </div>

      <section className="bg-custom-white">
        <div className="text-center mb-16 container max-w-5xl mx-auto">
          <h2 className="text-3xl">Accommodation</h2>
          <p className="text-base text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            pariatur odit reiciendis quae quod, accusamus quos, consectetur
            ipsum cum excepturi rem ea labore perspiciatis animi qui nesciunt a
            deserunt voluptas alias aliquam vero expedita enim ab assumenda!
            Beatae, mollitia qui unde temporibus dolorum architecto maiores, ut
            corrupti nemo facilis quos?
          </p>
        </div>

        <PackageList contents={roomsCategories} />

        <RoomAmenities />

        <Reservation />
      </section>
    </>
  );
};

export default PackageComponent;
