import React from "react";
import { Slider } from "../../constants/library";

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

  if (contents.length === 1) {
    const { id, title, image } = contents[0];
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
  }

  return (
    <Slider {...settings}>
      {contents.map(({ id, title, image }) => (
        <div key={id} className={`overflow-hidden group ${sizeClassName}`}>
          <div className={`flex gap-20`}>
            {image.map(({ src, alt }, index) => (
              <img
                key={index}
                src={src}
                alt={alt}
                className={`${sizeClassName} transition duration-700 ease-in-out transform group-hover:scale-105 object-cover flex-shrink-0`}
              />
            ))}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PackageSlider;
