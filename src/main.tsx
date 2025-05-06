import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import 'leaflet/dist/leaflet.css';
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./features/dashboard";
import Template from "./layouts/Template";
import Trips from "./features/trips/components/Trips";
import CreateTrips from "./features/trips/components/CreateTrips";
import Monitoring from "./features/monitoring";
import ViewTrip from "./features/trips/components/ViewTrip";
import Configuration from "./features/configuration/components/Configuration";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route index element={<Dashboard />} />
          {/* Perfiles */}
          <Route path="/perfil" element={<Trips />} />
          <Route path="/perfil/ver/:id" element={<Trips />} />
          <Route path="/perfil/editar/:id" element={<Trips />} />
          <Route path="/perfil/crear/:id" element={<Trips />} />
          {/* Viajes */}
          <Route path="/viajes" element={<Trips />} />
          <Route path="/viajes/crear" element={<CreateTrips />} />
          <Route path="/viajes/ver/:id" element={<ViewTrip />} />
          <Route path="/viajes/editar/:id" element={<CreateTrips />} />
          {/* Monitoreo */}
          <Route path="/monitoreo" element={<Monitoring />} />

          {/* Tramos */}
          <Route path="/tramos" element={<Trips />} />
          <Route path="/tramos/crear" element={<CreateTrips />} />
          <Route path="/tramos/ver/:id" element={<CreateTrips />} />
          <Route path="/tramos/editar/:id" element={<CreateTrips />} />
          {/* Configuración de parámetros */}
          <Route path="/configuracion" element={<Configuration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);