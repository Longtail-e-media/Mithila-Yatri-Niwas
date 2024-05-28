import { useState } from "react";

export const useForm = (initialState, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e, recaptchaToken, url) => {
    e.preventDefault();

    const isValid = validate(formData);
    if (!isValid) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(null), 3000);
      return;
    }

    if (!recaptchaToken) {
      setFormStatus("recaptchaError");
      setTimeout(() => setFormStatus(null), 3000);
      return;
    }

    try {
      setFormStatus("loading");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          "g-recaptcha-response": recaptchaToken,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        setFormStatus("success");
        setTimeout(() => setFormStatus(null), 3000);
      } else {
        console.error("Error:", response.statusText);
        setFormStatus("error");
        setTimeout(() => setFormStatus(null), 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus(null), 3000);
    }
  };

  return {
    formData,
    formStatus,
    handleChange,
    handleSubmit,
    setFormStatus,
  };
};
