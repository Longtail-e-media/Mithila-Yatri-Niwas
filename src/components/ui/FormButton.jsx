import React from "react";
import { TbBookmarkPlus } from "react-icons/tb";

const FormButton = ({ title, navClassName }) => {
  return (
    <>
      <button
        type="submit"
        aria-label="submit"
        className={`overflow-hidden rounded-full relative w-36 h-10 cursor-pointer flex items-center bg-alt-logo-clr group hover:bg-logo-clr active:bg-alt-logo-clr transition-linear ${navClassName}`}
      >
        <span className="text-custom-white font-semibold ml-8 transform group-hover:translate-x-20 transition-linear">
          {title}
        </span>
        <span className="absolute right-0 h-full w-10 rounded-full group-hover:bg-logo-clr bg-alt-logo-clr flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-linear">
          <TbBookmarkPlus className="text-custom-white -ml-6 group-hover:ml-0 text-xl group-hover:text-2xl transition-linear" />
        </span>
      </button>
    </>
  );
};

export default FormButton;
