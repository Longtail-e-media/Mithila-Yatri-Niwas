import React, { useState, useEffect } from "react";
import { CgArrowLongRight } from "../../constants/data";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // <button
    //   className={`${
    //     showButton ? "scale-100 translate-y-0" : "scale-0 translate-y-20"
    //   } z-50 fixed bottom-8 right-8 bg-goldLight backdrop-blur-md text-navy p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:bg-ivory`}
    //   onClick={scrollToTop}
    // >
    <button
      className={`${
        showButton ? "scale-100 translate-y-0" : "scale-0 translate-y-20"
      } group z-50 fixed bottom-4 right-4 backdrop-blur-md p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:bg-logo-bg hover:text-logo-clr bg-custom-white/70 text-alt-logo-clr`}
      onClick={scrollToTop}
      aria-label="Back to Top"
      title="Back to Top"
    >
      <CgArrowLongRight className="w-6 h-6 -rotate-90 group-hover:scale-x-125 transition-linear" />
    </button>
  );
};

export default BackToTop;
