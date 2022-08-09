import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NetworkControl from "./components/NetworkControl";
import prepare from "./mocks/prepare";
import "./index.css";

// Press "p" to toggle the NetworkControl component
prepare().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <>
      <NetworkControl />
      <App />
    </>
  );
});
