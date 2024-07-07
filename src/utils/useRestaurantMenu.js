import { useEffect, useState } from "react";
import { RES_MENU_URL } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [resMenu, setResMenu] = useState([]);
  //fetch data
  useEffect(() => {
    fetchMenuData();
  }, []);

  async function fetchMenuData() {
    //   let url =
    //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=52631";
    let restaurantMenuData = await fetch(RES_MENU_URL + restaurantId);
    let restaurantMenuDataJson = await restaurantMenuData.json();
    setResMenu(restaurantMenuDataJson);
  }
  return resMenu;
};

export default useRestaurantMenu;
