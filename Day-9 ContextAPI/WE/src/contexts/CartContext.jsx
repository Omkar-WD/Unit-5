import { createContext, useState } from "react";

export const CartContext = createContext(); //create a global for store the data

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(0);

  const handleChange = (value) => {
    setCart(cart + value);
  };
  return (
    <CartContext.Provider value={{ cart, handleChange }}>
      {children}
    </CartContext.Provider>
  );
};
