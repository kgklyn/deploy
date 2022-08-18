import React from "react";
import { Route, Routes } from "react-router-dom";
import EditContact from "./components/contact/EditContact";
import Home from "./components/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit" element={<EditContact />} />
    </Routes>
  );
};

export default MainRoutes;
