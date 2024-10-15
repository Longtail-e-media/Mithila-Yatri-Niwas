import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import {
  withDataFetching,
  logo,
  Button,
  LocationDetails,
  Socials,
  ScrollToTopOnNavigate,
} from "../constants/data";

const Navbar = ({ data: navLinks }) => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleDropdown = (id, event) => {
    event.preventDefault();
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="hidden relative h-12 md:h-24 w-full md:flex items-center justify-between px-2 md:px-6 z-50 bg-custom-black/20 backdrop-blur-sm bg-gradient-to-t from-custom-white/40 to-transparent">
        <Socials />

        <h1>
          <Link to="/">
            <img
              src={logo}
              alt="Mithila Yatri Niwas"
              className="w-20 h-12 md:w-32 md:h-24 p-1 object-contain transition-linear hover:scale-110 drop-shadow-lg"
            />
          </Link>
        </h1>

        <Button
          title="Booking"
          router="https://www.mithilayatriniwas.com/result.php?hotel_code=gBRaLW"
        />
      </header>

      <nav className="sticky top-0 h-12 bg-logo-bg/70 md:bg-custom-black/30 backdrop-blur-sm md:border-t border-b border-custom-white/50 text-custom-white drop-shadow-lg z-50">
        <div className="absolute top-0 inset-0 w-full h-12 bg-[url('/src/assets/graphics/floral-pattern.avif')] bg-contain bg-repeat-x opacity-10 -z-20 mix-blend-darken" />

        <div className="flex md:hidden items-center justify-between pr-4">
          <Link to="/">
            <img
              src={logo}
              alt="Mithila Yatri Niwas"
              className="w-20 h-12 p-1 object-contain transition-linear hover:scale-110 drop-shadow-sm"
            />
          </Link>
          <button
            className="relative p-2 "
            onClick={toggleMenu}
            aria-label="Menu"
            title="Menu"
          >
            <IoIosMenu
              className={`text-2xl absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-linear duration-300 text-logo-clr drop-shadow-md ${
                isMenuOpen ? "scale-100" : "scale-0"
              }`}
            />
            <IoMdClose
              className={`text-2xl absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-linear duration-300 text-logo-clr drop-shadow-md ${
                isMenuOpen ? "scale-0" : "scale-100"
              }`}
            />
          </button>
        </div>

        <div
          className={`py-6 md:p-0 bg-alt-logo-clr md:bg-transparent h-auto md:h-full transition-all duration-300 ease-out ${
            isMenuOpen ? "scale-x-0 md:scale-x-100" : "scale-x-100"
          }`}
        >
          <div className="md:hidden absolute inset-0 size-full bg-[url('/src/assets/graphics/flowers.webp')] bg-contain bg-repeat mix-blend-multiply opacity-20 -z-20" />

          <ul className="h-auto md:h-full flex flex-wrap md:flex-nowrap md:flex-row items-center justify-center gap-6 md:gap-12 font-medium cursor-pointer tracking-wider">
            {navLinks.map((link) => (
              <li key={link.id} className={`relative`}>
                {link.subLinks ? (
                  <div className="dropdown">
                    <NavLink
                      to={link.link}
                      className={({ isActive }) =>
                        `capitalize font-title inline-flex transition-linear drop-shadow-lg hover:scale-110 px-3 py-1 rounded-full ${
                          isActive ? "bg-custom-black/40" : ""
                        }`
                      }
                      onClick={(e) => toggleDropdown(link.id, e)}
                    >
                      {link.title}
                      <RiArrowDropDownLine className="text-2xl" />
                    </NavLink>
                    {openDropdownId === link.id && (
                      <ul className="bg-custom-black/50 backdrop-blur-sm absolute -left-1 mt-3 whitespace-nowrap overflow-hidden">
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.id}>
                            <NavLink
                              to={subLink.link}
                              className={({ isActive }) =>
                                `capitalize font-title inline-block hover:bg-custom-black/50 text-sm w-full h-full px-4 py-3 transition-linear drop-shadow-lg hover:scale-110 border-t border-b border-custom-white/50 ${
                                  isActive ? "bg-custom-black/40" : ""
                                }`
                              }
                            >
                              {subLink.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <ScrollToTopOnNavigate>
                    <NavLink
                      to={link.link}
                      className={({ isActive }) =>
                        `capitalize font-title inline-block transition-linear drop-shadow-lg hover:scale-110 px-3 py-1 rounded-full ${
                          isActive ? "bg-custom-black/40" : ""
                        }`
                      }
                      onClick={toggleMenu}
                    >
                      {link.title}
                    </NavLink>
                  </ScrollToTopOnNavigate>
                )}
              </li>
            ))}
          </ul>

          <div className="my-6 flex items-center justify-center flex-col md:hidden">
            <div className="grid grid-cols-3 place-items-center px-8">
              <div className="mt-10 md:m-0 col-span-3 md:col-span-1 order-2 md:order-1">
                <LocationDetails alignClassName="justify-center md:justify-start" />
              </div>

              <div className="col-span-3 md:col-span-1 flex items-center justify-center flex-col gap-10 order-1 md:order-2">
                <Link to="/">
                  <img
                    src={logo}
                    alt="Mithila Yatri Niwas"
                    className="w-full h-32 lg:h-48 md:p-1 object-contain rounded-xl"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(38%) hue-rotate(254deg) brightness(110%) contrast(110%)",
                    }}
                  />
                </Link>
                <Socials />
              </div>
            </div>
            <Button
              title="Booking"
              router="https://www.mithilayatriniwas.com/result.php?hotel_code=gBRaLW"
              // navClassName="block md:hidden border-2 border-solid border-red-600"
              navClassName="mt-16 block md:hidden outline outline-2 outline-offset-0 "
            />
          </div>
        </div>
      </nav>
    </>
  );
};

const transformNavLinks = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return navLinks;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_menu.php",
  transformNavLinks
)(Navbar);
