import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "../../constants/data";
import { Link } from "react-router-dom";
import { withDataFetching } from "../../constants/data";

const WhatsApp = ({ data: siteRegulars }) => {
  const [showButton, setShowButton] = useState(false);

  const { whatsapp_a } = siteRegulars;

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
    <>
      <Link
        to={`https://wa.me/${whatsapp_a}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          showButton ? "scale-100 translate-y-0" : "scale-0 translate-y-20"
          // } size-12 z-50 fixed bottom-4 left-4 border hover:border-logo-clr border-alt-logo-clr border-dotted backdrop-blur-md p-0 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:bg-logo-bg hover:text-logo-clr bg-custom-white/70 text-alt-logo-clr flex items-center justify-center`}
        } group size-12 z-50 fixed bottom-4 left-4 p-0 rounded-full shadow-lg transition-all duration-500 ease-in-out flex items-center justify-center bg-custom-white/70 hover:bg-logo-bg text-green-600 hover:bg-custom-white backdrop-blur-sm`}
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp className="text-4xl group-hover:scale-110 transition-linear" />
      </Link>
    </>
  );
};

const transformWhatsApp = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return siteRegulars;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_siteregulars.php",
  transformWhatsApp
)(WhatsApp);
