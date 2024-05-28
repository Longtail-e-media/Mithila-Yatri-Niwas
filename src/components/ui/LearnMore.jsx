import React from "react";
import { CgArrowLongRight } from "../../constants/data";
import { Link } from "react-router-dom";
import ScrollToTopOnNavigate from "../../hooks/ScrollToTopOnNavigate";

const Button = ({ text, primaryColor, secondaryColor, router }) => {
  return (
    <>
      <ScrollToTopOnNavigate>
        <Link
          to={router}
          className={`overflow-hidden rounded-full relative w-36 h-10 cursor-pointer flex items-center ${primaryColor} group hover:${secondaryColor} active:${primaryColor} transition-linear`}
        >
          <span className="text-custom-white font-semibold ml-8 transform group-hover:translate-x-20 transition-linear">
            {text}
          </span>
          <span
            className={`absolute right-0 h-full w-10 rounded-full ${primaryColor} group-hover:${secondaryColor} flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-linear`}
          >
            <CgArrowLongRight className="text-custom-white -ml-6 group-hover:ml-0 text-xl group-hover:text-2xl transition-linear" />
          </span>
        </Link>
      </ScrollToTopOnNavigate>
    </>
  );
};

export default Button;

// import React from "react";
// import { CgArrowLongRight } from "../../constants/data";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Button = ({ text, primaryColor, secondaryColor, router }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // Navigate to the desired route
//     navigate('/about');
//     // Scroll to the top of the page
//     window.scrollTo(0, 0);
//   };
//   return (
//     <>
//       <button
//     onClick={handleClick}
//         className={`overflow-hidden rounded-full relative w-36 h-10 cursor-pointer flex items-center ${primaryColor} group hover:${secondaryColor} active:${primaryColor} transition-linear`}
//       >
//         <span className="text-custom-white font-semibold ml-8 transform group-hover:translate-x-20 transition-linear">
//           {text}
//         </span>
//         <span
//           className={`absolute right-0 h-full w-10 rounded-full ${primaryColor} group-hover:${secondaryColor} flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-linear`}
//         >
//           <CgArrowLongRight className="text-custom-white -ml-6 group-hover:ml-0 text-xl group-hover:text-2xl transition-linear" />
//         </span>
//       </button>
//     </>
//   );
// };

// export default Button;
