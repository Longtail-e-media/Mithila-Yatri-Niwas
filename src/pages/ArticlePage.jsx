// import React from "react";
// import { useParams } from "react-router-dom";
// import { articlePageContents } from "../constants/data";
// import NotFound from "./404";

// const ArticlePage = () => {
//   const { slug } = useParams();
//   const article = articlePageContents[slug];

//   if (!article) {
//     return <NotFound />;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="space-y-6 text-center text-custom-black">
//         <h2 className="w-full md:w-3/4 mx-auto text-xl md:text-3xl leading-relaxed">
//           {article.title}
//         </h2>
//         <h3 className="text-lg md:text-2xl">{article.subtitle}</h3>
//         <p className="w-full md:w-11/12 mx-auto text-sm md:text-lg text-justify md:text-center text-custom-black/80">
//           {article.description}
//         </p>
//       </div>

//       <img src={article.image} alt={article.title} className="w-full mb-4" />
//       <p className="text-lg mb-4">{article.description}</p>
//     </div>
//   );
// };

// export default ArticlePage;

import React from "react";
import { useParams } from "react-router-dom";
import { articlePageContents } from "../constants/data";
import NotFound from "./404";

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articlePageContents[slug];

  if (!article) {
    return <NotFound />;
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </>
  );
};

export default ArticlePage;
