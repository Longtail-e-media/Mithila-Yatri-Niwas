import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import popup from "../assets/popup/newyear.webp";
import { Link } from "react-router-dom";

const popupContents = [
  {
    title: "New year 2083",
    description:
      "Celebrate the new year with us! Enjoy exclusive offers and discounts on our products. Don't miss out on this limited-time opportunity to start the year with amazing deals!",
    img: {
      src: popup,
      alt: "Popup Image",
    },
    startDate: "2026-4-5",
    endDate: "2026-4-14",
  },
];

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkDate = () => {
      const today = new Date();
      const startDate = new Date(popupContents[0].startDate);
      const endDate = new Date(popupContents[0].endDate);
      endDate.setHours(23, 59, 59, 999); // Set end date to the end of the day

      if (today >= startDate && today <= endDate) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkDate();
    const interval = setInterval(checkDate, 1000 * 60); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const closePopup = () => setIsOpen(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm z-50"
      onClick={closePopup}
    >
      <div
        className="relative overflow-hidden size-auto max-w-3xl p-8 mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-[50px] text-white text-4xl"
          onClick={closePopup}
        >
          &times;
        </button>
        <Link to="/contact">
        {popupContents.length === 1 ? (
          <div className="text-center">
            <img
              src={popupContents[0].img.src}
              alt={popupContents[0].img.alt}
              className="size-full aspect-square shadow object-contain"
              />
          </div>
        ) : (
          <Slider {...settings}>
            {popupContents.map((content, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={content.img.src}
                  alt={content.img.alt}
                  className="size-full aspect-square shadow object-cover"
                  />
              </div>
            ))}
          </Slider>
        )}
        </Link>
      </div>
    </div>
  );
};

export default Popup;
