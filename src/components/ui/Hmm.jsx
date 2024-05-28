import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import "../../styles__ltr.css";

const ContactForm = ({ contactFormFields }) => {
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [formData, setFormData] = useState(
    contactFormFields.reduce((acc, field) => {
      acc[field.id] = "";
      return acc;
    }, {})
  );
  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleInputChange = (e, id) => {
    setFormData({
      ...formData,
      [id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errormFieldsrs = {};
    contactFo.forEach((field) => {
      if (!formData[field.id] && field.id !== "message") {
        errors[field.id] = `${field.label} is required`;
      }
    });
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    // EmailJS service call
    emailjs
      .send(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        {
          ...formData,
          "g-recaptcha-response": recaptchaToken, // Ensure the recaptcha response is included
        },
        "YOUR_USER_ID" // replace with your EmailJS user ID
      )
      .then(
        (response) => {
          setSubmissionStatus("Email sent successfully!");
          setFormData(
            contactFormFields.reduce((acc, field) => {
              acc[field.id] = "";
              return acc;
            }, {})
          );
          setRecaptchaToken(null);
          setFormErrors({});
        },
        (error) => {
          setSubmissionStatus("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-8">
          {contactFormFields.map((field) => (
            <div key={field.id} className="relative z-0 flex flex-col group">
              <input
                type={field.type}
                name={`floating_${field.id}`}
                value={formData[field.id]}
                onChange={(e) => handleInputChange(e, field.id)}
                className={`block px-0 py-3 w-full text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-logo-clr peer rounded-none ${
                  formErrors[field.id] ? "border-red-500" : ""
                }`}
                placeholder=""
                required={field.id !== "message"}
              />
              <label
                htmlFor={`floating_${field.id}`}
                className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-logo-clr peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {field.label}
              </label>
              {formErrors[field.id] && (
                <span className="text-red-600 text-sm mt-1">
                  {formErrors[field.id]}
                </span>
              )}
              {typeof field.icon === "function" ? (
                <span className="absolute right-3 text-gray-600">
                  <field.icon />
                </span>
              ) : (
                <img
                  src={field.icon}
                  alt={field.id}
                  className="absolute right-3 w-8 h-8 p-1"
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-between flex-col md:flex-row gap-12">
          <ReCAPTCHA
            sitekey="6LcsfeEpAAAAAEq9Yyl0jxseAXX3rAO0LGIc2_Qu"
            // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" //test captcha key
            onChange={handleRecaptchaChange}
          />
          {/* <div className="absolute w-[18.5rem] h-5 bg-[#f9f9f9] -translate-y-7 translate-x-[2px]"></div> */}
          <button
            type="submit"
            className="bg-alt-logo-clr text-white font-semibold rounded-full text-sm px-8 py-3 w-full md:w-auto hover:bg-logo-clr transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
        {submissionStatus && (
          <div className="mt-4 text-center">
            <p>{submissionStatus}</p>
          </div>
        )}
      </form>
    </>
  );
};

export default ContactForm;
