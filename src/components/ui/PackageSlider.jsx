import React from "react";
import { Slider } from "../../constants/library"; // Assuming you're using a slider library like "react-slick"

const PackageSlider = ({ contents, sizeClassName }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  // Assuming you always pass contents array with at least 1 item
  const { image } = contents[0];

  // If there's only 1 image, don't use the slider, just display the single image
  if (image.length === 1) {
    const { src, alt } = image[0];
    return (
      <div className={`overflow-hidden group ${sizeClassName}`}>
        <img
          src={src}
          alt={alt}
          className={`${sizeClassName} transition duration-700 ease-in-out transform group-hover:scale-105 object-cover flex-shrink-0`}
        />
      </div>
    );
  }

  // For multiple images, use the slider
  return (
    <Slider {...settings}>
      {image.map(({ src, alt }, index) => (
        <div key={index} className={`overflow-hidden group ${sizeClassName}`}>
          <img
            src={src}
            alt={alt}
            className={`${sizeClassName} transition duration-700 ease-in-out transform group-hover:scale-105 object-cover flex-shrink-0`}
          />
        </div>
      ))}
    </Slider>
  );
};

export default PackageSlider;
