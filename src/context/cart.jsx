/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartCtx = createContext({
  items: [
    {
      quantity: 1,
      price: 6.5,
      name: "Hello",
      id: 1,
    },
  ],
  addToCart: (product) => {},
  increaseQuantity: (id) => {},
  decreaseQuantity: (id) => {},
  deleteProduct: (id) => {},
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addToCart = (product) => {
    setItems((prev) => [...prev, { ...product }]);
  };
  const increaseQuantity = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };
  const deleteProduct = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <CartCtx.Provider
      value={{
        items,
        addToCart,
        decreaseQuantity,
        increaseQuantity,
        deleteProduct,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};

export const useCart = () => useContext(CartCtx);
