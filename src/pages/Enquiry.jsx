import React from "react";
import { enquiryFormFields } from "../constants/data";
import EnquiryForm from "../components/ui/EnquiryForm";

const Enquiry = () => {
  return (
    <>
      <section id="enquiry-form" className="responsive-banner bg-alt-bg">
        <div
          className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/pattern-mandala.avif')] bg-repeat -z-10 mix-blend-multiply opacity-30`}
        />
        <div className="text-center mt-12 mb-16 container max-w-lg mx-auto">
          <h2 className="text-2xl md:text-3xl">Make a Reservation</h2>
          <p className="text-sm md:text-base text-gray-600 mt-4">
            Can't find the contact and information you're looking for? If you
            have any queries or would like to make a reservation, please don't
            hesitate to contact us.
          </p>
        </div>

        <EnquiryForm enquiryFormFields={enquiryFormFields} />
      </section>
    </>
  );
};

export default Enquiry;
