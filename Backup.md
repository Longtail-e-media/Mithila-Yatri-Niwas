### `Accommodation.jsx` backup code for accommodation

```jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgArrowLongRight } from "react-icons/cg";

const TestimonialsSlider = ({ contents }) => {
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

  return (
    <Slider {...settings}>
      {contents.map(({ id, title, description, icon, router }) => (
        <div key={id} className="p-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={icon} alt={title} className="w-full h-auto" />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <Link
              href={router}
              className="my-4 flex items-center justify-center gap-2 bg-alt-logo-clr hover:bg-logo-clr px-6 py-1 w-32 mx-auto rounded-full transition-linear group text-custom-white"
            >
              More
              <CgArrowLongRight />
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsSlider;
```
