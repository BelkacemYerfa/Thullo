import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataLayer } from "./config/dataLayer";
import { initialState, reducer } from "./config/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>
);
