import React from "react";
import { Slider } from "../../constants/library";
import { CgArrowLongRight } from "../../constants/data";
import { useNavigate } from "react-router-dom";

const RoomSlider = ({ contents }) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleLinkClick = (router) => {
    navigate(router);
  };

  return (
    <Slider {...settings}>
      {contents.map(({ id, title, description, image, router }) => (
        <div
          key={id}
          className="relative overflow-hidden h-96 lg:h-[80vh] group shadow-lg"
        >
          <img
            src={image[0].src}
            alt={title}
            className="w-full h-full transition duration-700 ease-in-out transform group-hover:scale-150 object-cover"
          />
          <div className="absolute bottom-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] w-full h-1/2 transition-linear group-hover:h-full" />
          <div className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] text-custom-white text-center transition-all duration-700 ease-in-out transform translate-y-2/3 group-hover:translate-y-0">
            <div className="p-4">
              <h3 className="text-2xl md:text-3xl font-medium mb-32 md:mb-64 group-hover:mb-0 transition-all duration-300">
                {title}
              </h3>
              <p className="text-custom-white my-8 text-sm md:text-base line-clamp-3 md:line-clamp-4">
                {description}
              </p>
              <button
                onClick={() => handleLinkClick(router)}
                className="flex items-center justify-center gap-2 bg-alt-logo-clr hover:bg-logo-clr px-6 py-3 w-32 mx-auto rounded-full transition-linear group"
              >
                Explore
                <CgArrowLongRight />
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default RoomSlider;
