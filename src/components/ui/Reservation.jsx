import React from "react";
import { Link } from "react-router-dom";

const Reservation = () => {
  return (
    <>
      <div className="container max-w-5xl relative bg-alt-bg/40 p-8">
        <div
          // className={`absolute inset-0 h-full w-full bg-[url('https://img.freepik.com/premium-vector/simple-ornate-background-with-elegant-motifs_1442-34895.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714262400&semt=ais')] bg-repeat z-0 mix-blend-overlay opacity-35`}
          // className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/hmm.png')] bg-repeat z-0 mix-blend-overlay opacity-35`}
          className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/pattern-mandala.avif')] bg-repeat -z-10 mix-blend-multiply opacity-70`}
        />
        <div className="contents">
          <div className="text-center my-16 container max-w-xl mx-auto">
            <h2 className="text-3xl">Write a message</h2>
            <p className="text-base text-gray-600 mt-4">
              Can't find the contact and information you're looking for? If you
              have any queries or would like to make a reservation, please don't
              hesitate to contact us.
            </p>

            <Link
              to="/contact#contact-form"
              className="my-12 font-title flex items-center justify-center gap-2 text-custom-white bg-alt-logo-clr hover:bg-logo-clr px-6 py-3 w-32 mx-auto transition-linear group"
            >
              Enquiry
            </Link>

            <div className="flex items-center justify-center flex-col gap-2">
              <span className="text-gray-600">
                or call us directly
                <Link
                  to="tel:+9779820113410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-custom-black/90 text-xl font-semibold hover:text-alt-logo-clr transition-linear"
                >
                  +977-9820113410
                </Link>
              </span>

              <Link
                to="mailto:info@hotelmithilanepal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-black/90 text-lg font-semibold hover:text-alt-logo-clr transition-linear"
              >
                info@hotelmithilanepal.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
