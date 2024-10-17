import React from "react";
import { withDataFetching } from "../../constants/data";
import { Link } from "react-router-dom";
import IconRenderer from "./IconRenderer";

const Socials = ({ data: socialLinks }) => {
  return (
    <>
      <div className="flex gap-4">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
            aria-label={link.title}
            title={link.title}
          >
            {/* {typeof link.icon === "function" ? (
              <link.icon className="text-xl text-custom-white transition-linear hover:scale-125 drop-shadow-lg" />
            ) : (
              <img
                src={link.icon}
                alt={link.title}
                className="size-8 p-1 transition-linear hover:scale-125 drop-shadow-lg"
              />
            )} */}
            <IconRenderer
              iconName={link.icon}
              className="text-xl text-custom-white transition-linear hover:scale-125 drop-shadow-lg"
            />
          </Link>
        ))}
      </div>
    </>
  );
};

const transformSocialLinks = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return socialLinks;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_social.php",
  transformSocialLinks
)(Socials);
