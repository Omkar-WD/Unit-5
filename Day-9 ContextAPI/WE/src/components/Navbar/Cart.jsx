import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav>
      <h5>No.Items in cart : {cart}</h5>
    </nav>
  );
};
