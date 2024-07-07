import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResItemCategory from "./ResItemCategory";
import { useState } from "react";

const RestaurantMenuCard = () => {
  let { restaurantId } = useParams();
  let resMenu = useRestaurantMenu(restaurantId);
  const [showIndex, setShowIndex] = useState(0);
  if (resMenu.length === 0) return <Shimmer />;
  let itemCategory =
    resMenu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const { name, costForTwo, avgRating, cuisines } =
    resMenu?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="flex flex-col items-center py-6">
      <div className="border-2 px-20 py-5 shadow-md rounded-md">
        <h1 className="font-bold text-lg">{name}</h1>
        <h2>{cuisines.join(",")}</h2>
        <h2>cost for two {costForTwo / 100} rs</h2>
        <h2>rating: {avgRating}</h2>
      </div>
      {itemCategory.map((item, index) => (
        <ResItemCategory
          data={item}
          key={item?.card?.card?.title}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => {
            //state lifiting
            //this component is called controlled component because it is controlling it child by the state
            index === showIndex ? setShowIndex(null) : setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenuCard;
