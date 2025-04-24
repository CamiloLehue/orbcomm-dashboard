import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import 'leaflet/dist/leaflet.css';
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./features/dashboard";
import Template from "./layouts/Template";
import Trips from "./features/trips/components/Trips";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route index element={<Dashboard />} />
          <Route path="/viajes" element={<Trips />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
