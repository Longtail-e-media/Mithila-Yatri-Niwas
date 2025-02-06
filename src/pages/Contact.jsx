import React from "react";
import {
  withDataFetching,
  contactFormFields,
  Banner,
  Direction,
  SvgWave,
} from "../constants/data";
import ContactForm from "../components/ui/ContactForm";
import ContactLocation from "../components/ui/ContactLocation";
import Meta from "../utils/Meta";

const Contact = ({ data: siteRegulars }) => {
  const { contact_upload, contact_meta_title } = siteRegulars;

  return (
    <>
      <Meta
        title={contact_meta_title}
        canonicalUrl={"https://mithilayatriniwas.com/contact"}
      />

      <Banner banner={contact_upload} page="Contact" />

      {/* <section className="bg-alt-bg">
        <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-alt-logo-clr shadow-lg rounded-md text-custom-white">
          <div>
            <h3 className="text-3xl font-extrabold">Contact Form</h3>
            <p className="text-sm text-gray-400 mt-3">
              Can't find the contact and information you're looking for? Write
              to us via this quick form.
            </p>

            <ul className="mt-12 flex flex-col gap-4">
              <li className="flex items-center justify-start gap-2 text-custom-white hover:scale-105 hover:text-white transition-linear">
                <GrLocation className="text-xl" />
                <a href="#" target="_blank" rel="noopener">
                  Dasrath Talau, Janakpur Dham, Dhanusha
                </a>
              </li>

              <li className="flex items-center justify-start gap-2 text-custom-white hover:scale-105 hover:text-white transition-linear">
                <TbPhone className="text-xl" />
                <a href="tel:+9779820113412" target="_blank" rel="noopener">
                  +977-9820113412
                </a>
              </li>
              <li className="flex items-center justify-start gap-2 text-custom-white hover:scale-105 hover:text-white transition-linear">
                <HiOutlineMail className="text-xl" />
                <a
                  href="mailto:fo@mithilayatriniwas.com"
                  target="_blank"
                  rel="noopener"
                >
                  fo@mithilayatriniwas.com
                </a>
              </li>
            </ul>

            <div className="mt-12">
              <Socials />
            </div>
          </div>
          <form className="ml-auo space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
              defaultValue={""}
            />
            <button
              type="button"
              className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
            >
              Send
            </button>
          </form>
        </div>
      </section> */}

      <section className="bg-logo-bg">
        <SvgWave />
        <div className="text-center mb-24 container max-w-5xl mx-auto">
          <h2 className="text-3xl">Contact Form</h2>
          <p className="text-base text-gray-600 mt-4">
            Connect with ease using our contact form. A simple, direct line for
            your inquiries and feedback. Quick, responsive, and always here to
            listen.
          </p>
        </div>
        <div className="container relative scroll-mt-32">
          <div className="grid lg:grid-cols-3 items-center gap-4 p-2 shadow-lg rounded-xl mt-8 bg-custom-white">
            <ContactLocation />

            <div className="p-6 rounded-xl lg:col-span-2" id="contact-form">
              <ContactForm contactFormFields={contactFormFields} />
            </div>
          </div>
        </div>
      </section>
      <Direction />
    </>
  );
};

const transformContactBanner = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return siteRegulars;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_siteregulars.php",
  transformContactBanner
)(Contact);
