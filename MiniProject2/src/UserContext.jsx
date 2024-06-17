import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <UserContext.Provider
      value={{ userEmail, cart, addToCart, removeFromCart, setUserEmail }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
