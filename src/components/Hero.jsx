import React, { useRef } from "react";
// import bgVideo from "https://www.mithilayatriniwas.com/template/cms/images/video.mp4";
import { mithilaNight } from "../constants/data";
import { mithilaVideo } from "../constants/data";

const Hero = () => {
  const videoRef = useRef(null);

  function startVideo() {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  return (
    <div className="relative top-0 w-full h-full lg:h-screen overflow-hidden responsive-banner">
      {/* <div className="overlay absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.25)]"></div> */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={mithilaNight}
        onClick={startVideo}
      >
        <source src={mithilaVideo} type="video/mp4" />
        <track
          src="#"
          kind="captions"
          srcLang="en"
          label="english_captions"
        ></track>
        A video of Mithila Yatri Niwas where you can see the beautiful
        infrastructure of the resort and the heritage of Janaki Temple.
      </video>
    </div>
  );
};

export default Hero;
