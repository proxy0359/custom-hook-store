import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Navigate to={"/products"} />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Route>
  )
);

const App = (props) => {
  return (
    <React.Fragment>
      <main>
        <RouterProvider router={router} />
      </main>
    </React.Fragment>
  );
};

export default App;
