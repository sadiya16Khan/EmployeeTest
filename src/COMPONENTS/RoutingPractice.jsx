import React from "react";

import { AppData } from "./AppData";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Addemployee } from "./Addemployee";
import { LogIn } from "./LogIn";
export const RoutingPractice = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Home" element={<AppData />} />
          <Route exact path="/addemployee" element={<Addemployee />} />
          <Route exact path="/" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
