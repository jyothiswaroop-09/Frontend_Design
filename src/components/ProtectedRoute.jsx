// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/login" />;
  }

  return children;
}
