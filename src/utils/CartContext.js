import { useContext, createContext, useState } from "react";

export const CartContext = createContext({});
console.log("cart", CartContext);
export const CartContextProvider = (props) => {
  const [cartValue, setCartValue] = useState([]);
  const updateCart = (addcart) => {
    setCartValue([...cartValue, addcart]);
  };
  const clearCart = () => {
    setCartValue([]);
  };
  return (
    <CartContext.Provider value={{ cartValue, updateCart, clearCart }}>
      {" "}
      {props.children}
    </CartContext.Provider>
  );
};
