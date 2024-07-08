import { useDispatch } from "react-redux";
import { addItem } from "../reduxStore/cartSlice";
const SuggItems = (props) => {
  const updateCartItems = useDispatch();
  // console.log(updateCartItems, "iiiiiiiiiiiiii");
  const { data } = props;
  const { name, price, defaultPrice, imageId, ratings, description } =
    data.card.info;
  return (
    <div>
      <h1>{name}</h1>
      <h2>Rs {price ? price / 100 : defaultPrice / 100}</h2>
      <h3
        onClick={() => {
          updateCartItems(addItem(name));
        }}
        className="cursor-pointer"
      >
        Add+
      </h3>
      <h1 className="border-b-2  border-green-950"></h1>
    </div>
  );
};

export default SuggItems;
