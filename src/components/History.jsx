import React from "react";

const History = () => {
  return (
    <>
      <div
        // className={`relative min-h-screen bg-[url('https://3.bp.blogspot.com/_dFHgYO4fOVk/S4LXrpqQ-JI/AAAAAAAAAA0/-Nh2V4Xv0dE/s1600/FILE0561.JPG')] bg-cover bg-top bg-fixed`}
        // className={`relative min-h-screen bg-[url('/src/assets/hmmm.jpg')] bg-cover bg-center bg-fixed`}
        className="relative h-auto bg-logo-bg"
      >
        {/* <div className="absolute bg-black/40 inset-0 z-0" /> */}
        <section className="z-10 text-custom-black pt-24 pb-48 md:pt-32 md:pb-96">
          <div className="text-justify sm:text-center mb-12 container max-w-7xl mx-auto space-y-4 text-custom-black">
            <h3 className="text-center text-2xl md:text-3xl mb-6">
              Cultural Legacy of Mithila
            </h3>
            <p className="text-base text-gray-600">
              The Janaki Temple, a revered Hindu sanctuary in Janakpur, Nepal,
              stands as a testament to the divine Sita. Showcasing a unique
              blend of Islamic and traditional Nepali architectural styles, it
              is celebrated as a prime example of Mughal influence in Nepalese
              design. Known affectionately as the Nau Lakha Mandir, its name
              reflects the nine hundred thousand rupees spent on its creation by
              Queen Vrisha Bhanu of Tikamgarh in 1910 AD. Recognized for its
              cultural significance, the temple was honored as a UNESCO
              tentative site in 2008.
            </p>
            <p className="text-base text-gray-600">
              As a pivotal Hindu pilgrimage destination, the Janaki Temple draws
              countless devotees from India and around the globe, especially
              during the auspicious occasions of Ram Nawami, Vivaha Panchami,
              Dashain, and Tihar. Its grandeur is magnified manifold during
              these festivals.
            </p>
            <p className="text-base text-gray-600">
              Nestled near this architectural marvel and the serene lakeside,
              the Hotel Mithila emerges as a three-star abode infused with
              spiritual themes, promising unparalleled hospitality and a
              transformative experience for all who visit.
            </p>
          </div>
        </section>
        <div
          className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/texture.avif')] bg-cover bg-center bg-no-repeat z-0 mix-blend-darken opacity-50`}
        />
        <div
          className={`absolute bottom-0 h-96 w-full bg-[url('/src/assets/sketch.webp')] bg-contain bg-bottom bg-repeat-x z-0 mix-blend-multiply`}
        />
      </div>
    </>
  );
};

export default History;
