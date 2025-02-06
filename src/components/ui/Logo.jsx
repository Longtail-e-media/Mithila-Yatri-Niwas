import React from "react";
import { Link } from "react-router-dom";
import { withDataFetching } from "../../constants/data";

const Logo = ({ styles, data: siteRegulars }) => {
  const { logo_upload } = siteRegulars;

  return (
    <Link to="/">
      <img
        src={logo_upload}
        alt="Mithila Yatri Niwas"
        className={`${styles}`}
      />
    </Link>
  );
};

const transformLogo = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return siteRegulars;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_siteregulars.php",
  transformLogo
)(Logo);
