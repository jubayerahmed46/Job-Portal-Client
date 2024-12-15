import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./root/router";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
