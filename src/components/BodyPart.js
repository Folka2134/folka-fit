import React from "react";

const BodyPart = ({ item, setBodyPart }) => (
  <button
    type="button"
    className="h-full w-full cursor-pointer list-none text-nowrap rounded-lg bg-primary p-5 text-xl font-semibold capitalize text-[#0a110d] transition-all duration-150 hover:bg-secondary "
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    {item}
  </button>
);

export default BodyPart;
