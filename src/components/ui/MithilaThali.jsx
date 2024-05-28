import React from "react";

const MithilaThali = () => {
  return (
    <>
      <section className="bg-logo-bg relative pt-1 sm:py-32 md:py-48">
        {/* <div className="absolute inset-0 bg-[url('https://www.dwarikas.com/wp-content/uploads/2021/08/c3.png.webp')] size-full bg-cover bg-no-repeat opacity-100" /> */}
        <div className="absolute inset-0 bg-[url('/src/assets/graphics/mithila_thali.webp')] size-full bg-cover bg-no-repeat mix-blend-multiply -z-10 opacity-10" />
        <div className="text-center max-w-4xl mx-auto mt-8">
          <h2 className="text-2xl md:text-3xl text-custom-black capitalize">
            Mithila Thali to Your Table
          </h2>
          <p className="text-sm md:text-sm lg:text-base text-gray-600 mt-4 text-justify md:text-center">
            A culinary journey through Janakpur's heritage, each dish in our
            Mithila Thali is crafted with care, offering a symphony of
            traditional spices and fresh ingredients. It's more than a meal;
            it's a cultural feast, served with heartfelt hospitality,
            celebrating flavors passed down through generations.
          </p>
        </div>
      </section>
    </>
  );
};

export default MithilaThali;
