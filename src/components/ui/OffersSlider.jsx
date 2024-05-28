import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgArrowLongRight } from "react-icons/cg";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const OffersSlider = ({ contents }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
      {contents.map(({ id, title, description, icon, router, price }) => (
        <div
          key={id}
          className="relative overflow-hidden w-full h-[80vh] group shadow-lg"
        >
          <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 scale-x-[5] group-hover:scale-x-[1] transition-all ease-in-out duration-500">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#c6cfd5"
                fillOpacity="1"
                d="M0,160L20,170.7C40,181,80,203,120,202.7C160,203,200,181,240,170.7C280,160,320,160,360,176C400,192,440,224,480,245.3C520,267,560,277,600,288C640,299,680,309,720,277.3C760,245,800,171,840,149.3C880,128,920,160,960,165.3C1000,171,1040,149,1080,133.3C1120,117,1160,107,1200,117.3C1240,128,1280,160,1320,154.7C1360,149,1400,107,1420,85.3L1440,64L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
              ></path>
            </svg> */}

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#c6cfd5"
                fillOpacity="1"
                d="M0,224L14.1,208C28.2,192,56,160,85,149.3C112.9,139,141,149,169,165.3C197.6,181,226,203,254,229.3C282.4,256,311,288,339,256C367.1,224,395,128,424,122.7C451.8,117,480,203,508,240C536.5,277,565,267,593,261.3C621.2,256,649,256,678,240C705.9,224,734,192,762,197.3C790.6,203,819,245,847,234.7C875.3,224,904,160,932,144C960,128,988,160,1016,192C1044.7,224,1073,256,1101,240C1129.4,224,1158,160,1186,138.7C1214.1,117,1242,139,1271,165.3C1298.8,192,1327,224,1355,218.7C1383.5,213,1412,171,1426,149.3L1440,128L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"
              ></path>
            </svg>
          </div>
          {/* <MdAttachMoney className="text-lg" />
            Price: &nbsp; &nbsp; Rs. {price} /- */}
          <Link
            to="https://www.mithilayatriniwas.com/result.php?hotel_code=gBRaLW"
            className="overflow-hidden mt-2 group-hover:mt-0 absolute left-1/2 -translate-x-1/2 w-40 z-10 flex items-center justify-center gap-2 bg-alt-logo-clr hover:bg-alt-logo-clr group-hover:bg-logo-clr px-6 text-custom-white py-3 group-hover:py-2 mx-auto rounded-full transition-linear group"
          >
            <span className="font-title group-hover:hidden transition-linear">
              Rs. {price} /-
            </span>
            <span className="font-title hidden group-hover:block transition-linear">
              Book
            </span>
            <CgArrowLongRight className="hidden group-hover:block transition-linear" />
          </Link>

          <img
            src={icon}
            alt={title}
            className="w-full h-full transition duration-700 ease-in-out transform group-hover:scale-150 object-cover z-0"
          />
          <div className="absolute bottom-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] w-full h-1/2 transition-linear group-hover:h-full" />
          <div className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] text-custom-white text-center transition-all duration-700 ease-in-out transform translate-y-1/2 group-hover:translate-y-1/3">
            <div className="p-4">
              <h3 className="text-3xl font-medium mb-12 group-hover:mb-0 transition-all duration-300">
                {title}
              </h3>
              <p className="text-custom-white my-8">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default OffersSlider;
