import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { AuthProvider } from "@/lib/auth";

import AppShell from "@/components/AppShell";

import Login from "@/pages/Login";
import AuthCallback from "@/pages/AuthCallback";

import Dashboard from "@/pages/Dashboard";
import Clients from "@/pages/Clients";
import ClientDetail from "@/pages/ClientDetail";
import Sessions from "@/pages/Sessions";
import SessionRoom from "@/pages/SessionRoom";
import CalendarPage from "./pages/Calendar";

function Router() {
  const location = useLocation();

  // Routes that should NOT use the dashboard/app shell
  const publicRoutes = ["/login", "/auth/callback"];

  const isPublicRoute = publicRoutes.includes(location.pathname);

  if (isPublicRoute) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    );
  }

  return (
    <AppShell>
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<Dashboard />} />

        {/* Clients */}
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/:id" element={<ClientDetail />} />

        {/* Sessions */}
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/sessions/:id" element={<SessionRoom />} />

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
    </AppShell>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}