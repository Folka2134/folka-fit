import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
  <Box
    width="400px"
    sx={{ width: { xl: "1488px" } }}
    m="auto"
    className="min-h-screen"
  >
    <Navbar />
    <Routes>
      <Route path="/folka-fit/" element={<Home />} />
      <Route path="/folka-fit/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
