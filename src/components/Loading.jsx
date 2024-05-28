import React from "react";
// import { logo } from "../constants/data";

const Loading = () => {
  return (
    <section className="responsive-banner flex items-center justify-center h-screen bg-black bg-opacity-10 flex-col relative">
      {/* <img
        src={logo}
        alt="Mithila Yatri Niwas"
        className="absolute left-1/2 -translate-x-1/2 w-[50vw] h-[50vh] object-contain opacity-20"
      /> */}
      <div className="size-16 rounded-full border-white border-t-4 border-t-logo-clr animate-spin" />
    </section>
  );
};

export default Loading;

// import React from "react";

// const Loading = () => {
//   return (
//     <section className="responsive-banner h-screen flex flex-col items-center justify-center">
//       <div className="w-4/5 bg-gray-200 h-64 rounded-lg shadow-lg mb-8 animate-pulse"></div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-4/5">
//         {[1, 2, 3, 4].map((index) => (
//           <div
//             key={index}
//             className="bg-gray-200 h-48 rounded-lg shadow-lg animate-pulse"
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Loading;
