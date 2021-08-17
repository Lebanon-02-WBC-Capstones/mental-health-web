import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/Exo2-VariableFont_wght.ttf";
import App from "./App";
import { StateProvider } from "./UsersData";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
      </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
