import React, { useContext } from "react";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";
import { useStore } from "../components/hooks-store/store";

const Favorites = (props) => {
  const state = useStore()[0].products;
  const test = "test";

  const dummyd = { test: "asdfasdf", test1: "Asdfas" };
  console.log(dummyd[test]);
  const favorites = state.filter((products) => products.isFavorite === true);
  let content = <p className="placeholder">Got no favorites yet!</p>;

  if (favorites.length > 0) {
    content = (
      <ul className="products-list">
        {favorites.map((prod) => (
          <li key={prod.id}>
            <FavoriteItem
              key={prod.id}
              id={prod.id}
              title={prod.title}
              description={prod.description}
            />
          </li>
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
