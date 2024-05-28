import React from "react";
import { Slider } from "../../constants/library";

const TestimonialsSlider = ({ contents }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
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
    <Slider {...settings}>
      {contents.map(({ id, author, location, description, icon }) => (
        <div key={id} className="p-4 h-80 overflow-x-hidden overflow-y-auto">
          <img
            src={icon}
            alt={author}
            className="w-32 h-8 rounded-full object-contain mx-auto"
          />
          <div className="mt-4 text-center space-y-3">
            <p className="text-sm text-gray-600 text-justify">{description}</p>
            <h3 className="text-lg font-medium">{author}</h3>
            <p className="text-sm text-gray-600">{location}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsSlider;
