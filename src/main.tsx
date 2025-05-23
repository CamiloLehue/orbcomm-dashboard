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
import ProtectedRoute from "./features/auth/components/login/ProtectedRoute";
import Login from "./features/auth/components/login/Login";
import Monotorings from "./features/monitorings/components/Monotorings";
import Information from "./features/information/components/Information";
import RoutesList from "./features/routes/components/RoutesList";
import LiveDemo from "./features/trips/components/LiveDemo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Template />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/livedemo" element={<LiveDemo />} />
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
            <Route path="/seguimientos" element={<Monotorings />} />
            {/* recorridos */}
            <Route path="/recorridos" element={<RoutesList />} />
            <Route path="/recorridos/crear" element={<CreateTrips />} />
            <Route path="/recorridos/ver/:id" element={<CreateTrips />} />
            <Route path="/recorridos/editar/:id" element={<CreateTrips />} />
            {/* Configuración de parámetros */}
            <Route path="/configuracion" element={<Configuration />} />
            <Route path="/info/:id" element={<Information />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);