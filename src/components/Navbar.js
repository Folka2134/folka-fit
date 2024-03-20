import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        className="w-36 h-36 m-0 ml-10 rounded-full bg-primary"
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
        className="text-decoration-none text-[#3A1212] hover:border-b-4 border-[#99d6b7] transition-all duration-75"
      >
        Home
      </Link>
      <a
        href="#exercises"
        className="text-decoration-none text-[#3A1212] hover:border-b-4 border-[#99d6b7] transition-all duration-75"
      >
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
