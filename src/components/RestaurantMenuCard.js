import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenuCard = () => {
  let [resMenu, setResMenu] = useState([]);
  let { restaurantId } = useParams();
  useEffect(() => {
    async function fetchMenuData() {
      //   let url =
      //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=52631";
      let restaurantMenuData = await fetch(RES_MENU_URL + restaurantId);
      let restaurantMenuDataJson = await restaurantMenuData.json();
      setResMenu(restaurantMenuDataJson);
      console.log("menu", restaurantMenuDataJson.data.cards[2].card.card.info);
    }
    fetchMenuData();
  }, []);
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
