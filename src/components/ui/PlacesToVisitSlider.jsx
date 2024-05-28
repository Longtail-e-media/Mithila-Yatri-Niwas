import React from "react";
import { Slider } from "../../constants/library";
import { CgArrowLongRight, ScrollToTopOnNavigate } from "../../constants/data";
import { Link } from "react-router-dom";

const PlacesToVisitSlider = ({ contents, router }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
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
  return (
    <>
      <Slider {...settings}>
        {contents.map(({ id, title, description, icon }) => (
          <div key={id} className="p-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={icon}
                alt={title}
                className="w-full h-48 sm:h-72 md:h-48 xl:h-72 object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium mb-2">{title}</h3>
              <p className="text-sm text-gray-600 text-justify line-clamp-3">
                {description}
              </p>
              <ScrollToTopOnNavigate>
                <Link
                  to={router}
                  className="my-4 flex items-center justify-center gap-2 bg-alt-logo-clr hover:bg-logo-clr px-6 py-1 w-32 mx-auto rounded-full transition-linear group text-custom-white"
                >
                  Explore
                  <CgArrowLongRight />
                </Link>
              </ScrollToTopOnNavigate>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default PlacesToVisitSlider;
