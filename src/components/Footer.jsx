import React from "react";
import { withDataFetching, LocationDetails, Socials } from "../constants/data";
import { Link } from "react-router-dom";
import IconRenderer from "./ui/IconRenderer";
import Logo from "./ui/Logo";

const Footer = ({ data: footerContents }) => {
  const {
    // logo,
    footerMenuItems,
    footerTerms,
    sister,
    sisterUrl,
    author,
    owner,
    currentYear,
    otaLinks,
  } = footerContents;

  return (
    <footer className="relative overflow-hidden bg-alt-logo-clr z-10 px-4">
      {/* <img
        src={mithila}
        alt="Mithila Yatri Niwas"
        className="absolute inset-0 -z-10 object-cover opacity-100"
      />
      <div className="absolute inset-0 bg-black/70 -z-10" /> */}

      {/* <div className="text-white relative overflow-hidden backdrop-blur-sm z-30"> */}
      {/* <div className="absolute inset-0 size-full bg-[url('https://as2.ftcdn.net/v2/jpg/03/75/84/95/1000_F_375849552_wcE7DBipdqataw3aNPUDRdUSmW3kI6p5.jpg')] bg-contain bg-repeat mix-blend-darken opacity-80 -z-20" /> */}
      {/* <div className="bg-fixed absolute inset-0 size-full bg-[url('/src/assets/graphics/flowers.webp')] bg-contain bg-repeat mix-blend-multiply opacity-10 -z-20" /> */}

      <div
        className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/pattern-mandala.avif')] bg-repeat -z-20 mix-blend-multiply opacity-40`}
      />

      <div className="text-white relative overflow-hidden z-30">
        <div className="container pt-20 pb-8">
          <div className="grid grid-cols-3 place-items-center px-8">
            <div className="mt-10 md:m-0 col-span-3 md:col-span-1 order-2 md:order-1">
              <LocationDetails alignClassName="justify-center md:justify-start" />
            </div>

            <div className="col-span-3 md:col-span-1 flex items-center justify-center flex-col gap-10 order-1 md:order-2">
              <Logo styles="filter-white w-full h-32 lg:h-48 md:p-1 object-contain rounded-xl" />
              <Socials />
            </div>

            <div className="col-span-3 md:col-span-1 hidden md:flex flex-col items-end justify-end gap-4 order-3">
              <ul className="flex gap-8">
                {footerMenuItems.slice(0, 3).map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.router}
                      className="text-xs md:text-sm lg:text-base relative group text-custom-white hover:text-white hover:scale-110 transition-linear flex items-center gap-2"
                    >
                      <IconRenderer
                        iconName={item.icon}
                        className="text-sm md:text-sm lg:text-base lg:mr-1"
                      />

                      {item.text.split(" ")[0]}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="flex items-center justify-start gap-8">
                {footerMenuItems.slice(3, 4).map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.router}
                      className="text-xs md:text-sm lg:text-base relative group text-custom-white hover:text-white hover:scale-110 transition-linear flex items-center gap-2"
                    >
                      {/* <item.icon className="text-sm md:text-sm lg:text-base lg:mr-1" /> */}
                      <IconRenderer
                        iconName={item.icon}
                        className="text-sm md:text-sm lg:text-base lg:mr-1"
                      />
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center justify-start gap-8">
                {footerMenuItems.slice(4, 6).map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.router}
                      className="text-xs md:text-sm lg:text-base relative group text-custom-white hover:text-white hover:scale-110 transition-linear flex items-center gap-2"
                    >
                      {/* <item.icon className="text-sm md:text-sm lg:text-base lg:mr-1" /> */}
                      <IconRenderer
                        iconName={item.icon}
                        className="text-sm md:text-sm lg:text-base lg:mr-1"
                      />
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-16"> */}
          <div className="flex items-center justify-center py-8 md:gap-12 md:py-16 flex-wrap">
            {otaLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 flex items-center justify-center"
                aria-label={link.title}
                title={link.title}
              >
                <img
                  src={link.icon}
                  alt={link.title}
                  className="w-32 h-9 object-contain bg-white rounded-full shadow-md px-4 py-2"
                />
              </Link>
            ))}
          </div>

          <div className="flex justify-center items-center gap-8 md:gap-16 mb-12">
            {footerTerms.map((link, index) => (
              <Link
                key={index}
                to={link.router}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-base relative group text-custom-white hover:text-white underline transition-linear  hover:scale-105"
              >
                {link.text}
                {/* <div className="mt-1 absolute h-[2px] rounded-full w-4 bg-custom-white/20 group-hover:bg-custom-white -translate-y-1 origin-left group-hover:w-12 transition-linear" /> */}
              </Link>
            ))}
          </div>

          <hr className="border-custom-white/50 mb-4" />

          <div className="text-center mb-8">
            <p className="text-sm md:text-base">
              Our Affiliations / Sister concerns: &nbsp;
              <Link
                to={sisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                {sister}
              </Link>
            </p>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row md:justify-between gap-2 text-sm md:text-base">
            <span>
              &copy; {currentYear} {owner} | All Rights Reserved{" "}
            </span>
            <span>
              Website by: &nbsp;
              <Link
                to="https://www.longtail.info/"
                target="_blank"
                className="font-bold"
              >
                {author}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const transformFooterContents = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return footerContents;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_footer.php",
  transformFooterContents
)(Footer);
