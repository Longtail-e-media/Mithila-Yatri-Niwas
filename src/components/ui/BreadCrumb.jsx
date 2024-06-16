import React from "react";
import { IoHome } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { ScrollToTopOnNavigate } from "../../constants/data";

const BreadCrumb = ({ page }) => {
  return (
    <>
      <nav
        className="flex items-center justify-center px-5 pt-16 py-3 absolute left-0 bottom-0 w-full bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)]"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-3">
          <li className="inline-flex items-center">
            <ScrollToTopOnNavigate>
              <Link
                to="/"
                className="inline-flex items-center justify-center text-sm md:text-base font-medium text-gray-100 font-title tracking-wider bg-custom-black/40 hover:bg-custom-black/70 transition-linear px-3 py-1 rounded-full"
              >
                <IoHome className="text-sm md:text-lg me-2.5 -mt-[5px]" />
                Home
              </Link>
            </ScrollToTopOnNavigate>
          </li>
          <li aria-current="page">
            <h2 className="inline-flex items-center justify-center text-sm md:text-base font-extrabold text-gray-100 hover:text-custom-white font-title tracking-wider ">
              <MdKeyboardDoubleArrowRight className="text-lg me-2.5 -mt-[5px]" />
              {page}
            </h2>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumb;
