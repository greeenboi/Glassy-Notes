import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { invoke } from "@tauri-apps/api/tauri";


document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    invoke('close_splashscreen');
  }, 2000);
})
  
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
