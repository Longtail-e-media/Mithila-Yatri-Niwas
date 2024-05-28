import React, { useState } from "react";
import { mithila, galleryImages, Banner, SvgWave } from "../constants/data";

import {
  LightGallery,
  lgZoom,
  lgVideo,
  lgThumbnail,
  lgFullscreen,
} from "../constants/library";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const categories = [
    "All",
    ...new Set(galleryImages.map((image) => image.category)),
  ];

  const handleCategoryClick = (category) => {
    setIsTransitioning(true);
    setActiveCategory(category);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <>
      <Banner banner={mithila} page="Gallery" />

      <section className="bg-logo-bg">
        <SvgWave />
        <div className="text-center mb-16 container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl">Glimpse of Memory</h2>
          <p className="text-base text-gray-600 mt-4">
            Where fleeting moments are captured and cherished. It's a sanctuary
            for the past, holding echoes of laughter and whispers of dreams.
            Here, each memory is a precious thread in the tapestry of our lives.
          </p>
        </div>

        <div className="p-4 md:p-8 flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`${
                activeCategory === category
                  ? // ? "bg-blue-200 text-blue-600"
                    // : "bg-transparent text-gray-700"
                    "text-custom-black"
                  : "text-custom-black/50"
              } font-title font-bold text-xs md:text-sm lg:text-base py-2 px-1 md:py-2 md:px-4 rounded-md uppercase transition-linear hover:text-custom-black hover:bg-custom-black/5`}
            >
              {category}
            </button>
          ))}
        </div>

        <LightGallery
          plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
          mode="lg-fade"
          elementClassNames={`w-full grid grid-cols-2 lg:grid-cols-4 gap-4 transition-linear ${
            isTransitioning ? "translate-y-1/2" : "translate-y-0"
          }`}
          options={{
            thumbnail: true,
            autoplay: true,
          }}
        >
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`group gallery-item overflow-hidden transition-all duration-200 ease-linear ${
                isTransitioning ? "scale-0" : "scale-100"
              }`}
              data-src={image.url}
            >
              <img
                className="w-full h-full  object-cover transition duration-700 ease-in-out group-hover:scale-125 cursor-pointer shadow-lg"
                src={image.url}
                alt={image.alt}
                loading="lazy"
              />
            </div>
          ))}
        </LightGallery>
      </section>
    </>
  );
};

export default GalleryPage;
