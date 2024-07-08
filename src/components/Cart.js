import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../reduxStore/cartSlice";

const Cart = () => {
  const clearItemD = useDispatch();
  const clearTheCart = () => {
    console.log("on the clear cart");
    clearItemD(clearItem());
  };
  return (
    <div className="text-center">
      <h1>Cart</h1>
      <button onClick={clearTheCart}>Clear cart</button>
    </div>
  );
};

export default Cart;
