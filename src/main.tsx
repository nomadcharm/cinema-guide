import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";
import "./index.scss";
import { AuthProvider } from "./context/AuthProvider.tsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
  </React.StrictMode>,
)
