import React from "react";
import {
  LightGallery,
  lgZoom,
  lgVideo,
  lgThumbnail,
  lgFullscreen,
} from "../../constants/library";
import { withDataFetching } from "../../constants/data";

const AboutGallery = ({ data: aboutContents }) => {
  const { galleryImages } = aboutContents;

  return (
    <>
      <LightGallery
        plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
        mode="lg-fade"
        elementClassNames="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&img:not(:first-child)]:mt-5 lg:[&img:not(:first-child)]:mt-8"
        options={{
          thumbnail: true,
          autoplay: true,
        }}
      >
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group gallery-item overflow-hidden"
            data-src={image.url}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-56 md:h-full mb-5 object-cover shadow-md cursor-pointer"
            />
          </div>
        ))}
      </LightGallery>
    </>
  );
};

const transformAboutGallery = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return aboutContents;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_aboutus.php",
  transformAboutGallery
)(AboutGallery);
