import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Loginpage from "../page/Loginpage";
import Signuppage from "../page/SIgnUp";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../page/Dashboard";
import Details from "../page/Details";

const PageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />,
  },
  {
    path: "/signup",
    element: <Signuppage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/details",
    element: (
      <ProtectedRoute>
        <Details />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export default PageRoutes;
