import React from "react";

function Button({ text, ...props}) {
  return (
    <div className="px-1 w-full">
      <button
        {...props}
        type="button"
        className="py-1.5 px-3 text-base font-sans cursor-pointer text-white bg-[#198754] border-[#198754] hover:bg-[#24754f] duration-200 text-center rounded w-full border outline-none focus:shadow-greenRing"
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
