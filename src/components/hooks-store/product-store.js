import { initStore } from "./store";

export const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const productIndex = curState.products.findIndex(
        (prod) => prod.id === productId
      );
      const products = [...curState.products];
      const favoriteToggle = !products[productIndex].isFavorite;
      const updated = products[productIndex];

      const updatedProduct = { ...updated, isFavorite: favoriteToggle };

      products[productIndex] = updatedProduct;
      return { products: products };
    },
  };
  initStore(actions, {
    products: [
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
    ],
  });
};
