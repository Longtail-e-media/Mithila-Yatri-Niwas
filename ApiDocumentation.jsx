import React from "react";
import { withDataFetching } from "../constants/data";

const ComponentName = ({ data: variableName }) => {
  return (
    <>
      {/* use your variableName here */}
      <h1>{variableName}</h1>
    </>
  );
};

const transformVariableName = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return variableName;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/your_api_link_here.php",
  transformVariableName
)(ComponentName);
