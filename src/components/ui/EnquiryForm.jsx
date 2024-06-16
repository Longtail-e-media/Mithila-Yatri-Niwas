import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { ReCaptcha, Toast, FormButton } from "../../constants/data";
import { useLocation } from "react-router-dom";

const EnquiryForm = ({ enquiryFormFields }) => {
  const location = useLocation();
  const { venue } = location.state || {};
  
  const initialState = enquiryFormFields.reduce((acc, field) => {
    acc[field.id] = field.id === "event-venue" && venue ? venue : "";
    return acc;
  }, {});

  const validateForm = (formData) => {
    for (const key in formData) {
      if (formData[key].trim() === "") {
        return false;
      }
    }
    return true;
  };

  const { formData, formStatus, handleChange, handleSubmit, setFormStatus } =
    useForm(initialState, validateForm);

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const dd = String(today.getDate()).padStart(2, "0");

    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <>
      <form
        className="container max-w-3xl mt-8"
        onSubmit={(e) =>
          handleSubmit(
            e,
            recaptchaToken,
            "https://mithilayatriniwas.com/enquery_mail_hall_react.php"
          )
        }
      >
        <div className="grid sm:grid-cols-2 gap-8">
          {enquiryFormFields.map((field) => (
            <div
              key={field.id}
              className="relative z-0 flex items-center justify-between group"
            >
              <input
                type={field.type}
                name={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className="text-xl block px-0 py-5 w-full text-custom-black bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-logo-clr peer rounded-none"
                placeholder=""
                required={field.id !== "message"}
                min={field.type === "date" ? getTodayDate() : undefined}
              />
              <label
                htmlFor={field.id}
                className="absolute text-base text-custom-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-logo-clr peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {field.label}
              </label>
              {typeof field.icon === "function" ? (
                <span className="absolute right-0 text-custom-black/90 text-xl p-1 bg-alt-bg pointer-events-none">
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
          <ReCaptcha onChange={handleRecaptchaChange} />
          <FormButton title="Submit" />
        </div>
      </form>
      <Toast formStatus={formStatus} />
    </>
  );
};

export default EnquiryForm;
