import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenuCard = () => {
  let { restaurantId } = useParams();
  let resMenu = useRestaurantMenu(restaurantId);
  console.log(resMenu, "kkkkkkkk");
  if (resMenu.length === 0) return <Shimmer />;

  const { name, costForTwo, avgRating, cuisines } =
    resMenu?.data?.cards[2]?.card?.card?.info;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h2>cost for two {costForTwo / 100} rs</h2>
      <h2>{avgRating}</h2>
      <u>
        <li>Biriyani</li>
        <li>Juice</li>
      </u>
    </div>
  );
};

export default RestaurantMenuCard;
