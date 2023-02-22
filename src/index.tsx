import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AudioPlayerProvider } from "./contexts/AudioPlayerContext";
import { audioConfig } from "./config";
import App from "./App";
import "./styles/global.module.css";

const element = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AudioPlayerProvider config={audioConfig}>
        <App />
      </AudioPlayerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
