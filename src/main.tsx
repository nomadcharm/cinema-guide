import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";
import "./index.scss";
import React from "react";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import SearchProvider from "./context/SearchProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AuthProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
