import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    // direction="row"
    // justifyContent="space-around"
    // sx={{
    //   gap: { sm: "123px", xs: "40px" },
    //   mt: { sm: "32px", xs: "20px" },
    // }}
    // px="20px"
    className="mt-10 flex w-full flex-row items-center gap-5 md:items-start md:justify-start md:px-20"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        className="m-0 h-36 w-36 rounded-full bg-primary md:ml-10"
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        className="text-decoration-none border-[#99d6b7] text-[#3A1212] transition-all duration-75 hover:border-b-4"
      >
        Home
      </Link>
      <a
        href="#exercises"
        className="text-decoration-none border-[#99d6b7] text-[#3A1212] transition-all duration-75 hover:border-b-4"
      >
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
