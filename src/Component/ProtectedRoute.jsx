// src/authentication/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase.config";

const ProtectedRoute = ({ children }) => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  // If not logged in, redirect to login
  if (!user) {
    return <Navigate to="/Login" replace />;
  }

  return children;
};

export default ProtectedRoute;
