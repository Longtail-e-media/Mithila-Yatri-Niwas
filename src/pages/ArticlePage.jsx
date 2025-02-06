import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./404";
import { withDataFetching } from "../constants/data";
import Meta from "../utils/Meta";

const ArticlePage = ({ data: articlePageContents }) => {
  const { slug } = useParams();
  const article = articlePageContents[slug];

  if (!article) {
    return <NotFound />;
  }

  const { html, title, meta_description, meta_keywords } = article;

  return (
    <>
      <Meta
        title={title}
        meta_description={meta_description}
        meta_keywords={meta_keywords}
        canonicalUrl={`https://mithilayatriniwas.com/${slug}`}
      />

      <section className="responsive-banner bg-logo-bg">
        <div className="text-center md:my-8 container space-y-6 mb-16">
          <h2 class="text-2xl md:text-3xl capitalize">{title}</h2>
          <div
            className="space-y-8 text-center"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </>
  );
};

const transformArticlePageContents = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return articlePageContents;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_article.php",
  transformArticlePageContents
)(ArticlePage);
