import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles.css"; // ✅ Ensure this is correctly placed


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
