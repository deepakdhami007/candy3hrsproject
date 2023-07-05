import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "../node_modules/react-bootstrap/dist/react-bootstrap";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { ContextProvider } from "../node_modules/react-bootstrap/dist/react-bootstrap";
import CartProvider from "./Components/store/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <CartProvider> */}
    <App />
    {/* </CartProvider> */}
  </React.StrictMode>
);
