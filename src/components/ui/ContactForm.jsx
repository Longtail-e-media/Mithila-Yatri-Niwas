// import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import { IoMdCloseCircle, IoMdCheckmarkCircle, IoMdSync } from "react-icons/io";
// import { FormButton } from "../../constants/data";

// const ContactForm = ({ contactFormFields }) => {
//   const [formData, setFormData] = useState(
//     contactFormFields.reduce((acc, field) => {
//       acc[field.id] = "";
//       return acc;
//     }, {})
//   );
//   const [recaptchaToken, setRecaptchaToken] = useState(null);
//   const [formStatus, setFormStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleRecaptchaChange = (token) => {
//     setRecaptchaToken(token);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form data
//     const isValid = validateForm(formData);
//     if (!isValid) {
//       setFormStatus("error");
//       setTimeout(() => setFormStatus(null), 3000);
//       return;
//     }

//     // Validate reCAPTCHA
//     if (!recaptchaToken) {
//       setFormStatus("recaptchaError");
//       setTimeout(() => setFormStatus(null), 3000);
//       return;
//     }

//     try {
//       setFormStatus("loading");
//       const response = await fetch(
//         "https://mithilayatriniwas.com/enquery_mail_react.php",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             ...formData,
//             "g-recaptcha-response": recaptchaToken,
//           }),
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Success:", data);
//         setFormStatus("success");
//         setTimeout(() => setFormStatus(null), 3000);
//       } else {
//         console.error("Error:", response.statusText);
//         setFormStatus("error");
//         setTimeout(() => setFormStatus(null), 3000);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setFormStatus("error");
//       setTimeout(() => setFormStatus(null), 3000);
//     }
//   };

//   // Function to validate form data
//   const validateForm = (formData) => {
//     for (const key in formData) {
//       if (formData[key].trim() === "") {
//         return false;
//       }
//     }
//     return true;
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className="grid sm:grid-cols-2 gap-8">
//           {contactFormFields.map((field) => (
//             <div
//               key={field.id}
//               className="relative z-0 flex items-center justify-between group"
//             >
//               <input
//                 type={field.type}
//                 name={field.id}
//                 value={formData[field.id]}
//                 onChange={handleChange}
//                 className="block px-0 py-3 w-full text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-logo-clr peer rounded-none"
//                 placeholder=""
//                 required={field.id !== "message"}
//               />
//               <label
//                 htmlFor={field.id}
//                 className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-logo-clr peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//               >
//                 {field.label}
//               </label>
//               {typeof field.icon === "function" ? (
//                 <span className="absolute right-3 text-gray-600">
//                   <field.icon />
//                 </span>
//               ) : (
//                 <img
//                   src={field.icon}
//                   alt={field.id}
//                   className="absolute right-3 w-8 h-8 p-1"
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="mt-8 flex items-center justify-between flex-col md:flex-row gap-12">
//           <ReCAPTCHA
//             // sitekey="6LcsfeEpAAAAAEq9Yyl0jxseAXX3rAO0LGIc2_Qu"
//             sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" //test captcha key
//             onChange={handleRecaptchaChange}
//           />
//           <FormButton title="Submit" />
//         </div>
//       </form>
//       {formStatus && (
//         <div
//           className={`${
//             formStatus === "success"
//               ? "bg-green-200 text-green-700"
//               : formStatus === "error" || formStatus === "recaptchaError"
//               ? "bg-red-200 text-red-700"
//               : "bg-yellow-100 text-yellow-700"
//           } font-bold max-w-sm mx-auto fixed top-16 left-4 right-4 p-4 rounded-md shadow-lg flex items-center gap-4 z-[99] transition-opacity duration-300 ease-in-out transform ${
//             formStatus ? "scale-100" : "scale-0"
//           }`}
//         >
//           {formStatus === "success" && <IoMdCheckmarkCircle />}
//           {formStatus === "error" && <IoMdCloseCircle />}
//           {formStatus === "recaptchaError" && <IoMdCloseCircle />}
//           {formStatus === "loading" && <IoMdSync className="animate-spin" />}
//           {formStatus === "success"
//             ? " Your message has been sent successfully!"
//             : formStatus === "error"
//             ? "Unable to send message. Please try again."
//             : formStatus === "recaptchaError"
//             ? "Please complete the reCAPTCHA."
//             : "Loading..."}
//         </div>
//       )}
//     </>
//   );
// };

// export default ContactForm;


import React, { useState } from "react";
import { ReCaptcha, Toast, FormButton } from "../../constants/data";
import { useForm } from "../../hooks/useForm";

const ContactForm = ({ contactFormFields }) => {
  const initialState = contactFormFields.reduce((acc, field) => {
    acc[field.id] = "";
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

  const {
    formData,
    formStatus,
    handleChange,
    handleSubmit,
    setFormStatus,
  } = useForm(initialState, validateForm);

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, recaptchaToken, "https://mithilayatriniwas.com/enquery_mail_react.php")}>
        <div className="grid sm:grid-cols-2 gap-8">
          {contactFormFields.map((field) => (
            <div
              key={field.id}
              className="relative z-0 flex items-center justify-between group"
            >
              <input
                type={field.type}
                name={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className="block px-0 py-3 w-full text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-logo-clr peer rounded-none"
                placeholder=""
                required={field.id !== "message"}
              />
              <label
                htmlFor={field.id}
                className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-logo-clr peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {field.label}
              </label>
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
          <ReCaptcha onChange={handleRecaptchaChange} />
          <FormButton title="Submit" />
        </div>
      </form>
      <Toast formStatus={formStatus} />
    </>
  );
};

export default ContactForm;
