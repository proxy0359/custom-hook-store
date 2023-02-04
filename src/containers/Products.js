import React from "react";

import { useContext } from "react";
import { FavContext } from "../context/favorite-context";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

import { useStore } from "../components/hooks-store/store";

const Products = (props) => {
  const state = useStore()[0];
  console.log(state);
  return (
    <ul className="products-list">
      {state.products
        ? state.products.map((prod) => (
            <ProductItem
              key={prod.id}
              id={prod.id}
              title={prod.title}
              description={prod.description}
              isFav={prod.isFavorite}
            />
          ))
        : ""}
    </ul>
  );
};

export default Products;
