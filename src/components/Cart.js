import { useContext } from "react";
import { CartContext } from "../utils/CartContext";

const Cart = (props) => {
  const { cartValue, clearCart } = useContext(CartContext);
  return (
    <div className="text-center">
      <h1>In Cart</h1>
      <button
        className="bg-green-950 text-white font-medium px-4 py-2 rounded-lg"
        onClick={clearCart}
      >
        Clear Cart
      </button>
      {cartValue.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </div>
  );
};

export default Cart;
