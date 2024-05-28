import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = ({ onChange }) => {
  return (
    <ReCAPTCHA
      // sitekey="6LcsfeEpAAAAAEq9Yyl0jxseAXX3rAO0LGIc2_Qu"
      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // replace with your actual sitekey
      onChange={onChange}
    />
  );
};

export default ReCaptcha;
