import React from "react";
import { withDataFetching } from "../constants/data";

const History = ({ data: historyContent }) => {
  const { title, html } = historyContent;

  return (
    <>
      <div className="relative h-auto bg-logo-bg">
        <section className="z-10 text-custom-black pt-24 pb-48 md:pt-32 md:pb-96">
          <div className="text-justify sm:text-center mb-12 container max-w-7xl mx-auto text-custom-black">
            <h3 className="text-center text-2xl md:text-3xl mb-10">
              Cultural Legacy of Mithila, Janakpur
            </h3>
            <div
              className="space-y-6 text-justify md:text-center text-sm md:text-base text-gray-600"
              dangerouslySetInnerHTML={{ __html: historyContent.html }}
            />
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

const transformHistory = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return historyContent;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_history.php",
  transformHistory
)(History);
