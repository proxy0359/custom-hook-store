import React, { useState } from "react";

export const FavContext = React.createContext({
  products: [],
  favoriteHandler: (id) => {},
});

export default (props) => {
  const [products, setProducts] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const favoriteHandler = (id) => {
    const productIndex = products.findIndex((prod) => prod.id === id);
    const productsCopy = [...products];
    const favoriteToggle = !productsCopy[productIndex].isFavorite;
    const updated = productsCopy[productIndex];

    const updatedProduct = { ...updated, isFavorite: favoriteToggle };

    productsCopy[productIndex] = updatedProduct;

    setProducts(productsCopy);
  };

  const value = {
    products,
    favoriteHandler,
  };
  return (
    <FavContext.Provider value={value}>{props.children}</FavContext.Provider>
  );
};
