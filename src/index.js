import React from "react";
import ReactDOM from "react-dom/client";
import ProductsProvider from "./context/favorite-context";
import "./index.css";
import App from "./App";
import { configureStore } from "./components/hooks-store/product-store";

configureStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);
