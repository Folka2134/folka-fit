import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <li
    className="h-full w-full cursor-pointer list-none text-nowrap rounded-lg bg-primary p-5 text-xl font-semibold capitalize text-[#0a110d] transition-all duration-150 hover:bg-secondary "
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    {item}
  </li>
);

export default BodyPart;
