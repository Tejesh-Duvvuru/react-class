import RestaurantCard from "./RestaurantCard";
import restaurantsData from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// react hook is a normalfunction which is a like utility

const Body = () => {
  //when ever a state value updates react will rerender component(reconciliation)
  const [resData, setResData] = useState([]);
  const [filterResData, setFilterResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  //react will find the older virtual dom and new virtual dom
  // if we kepp const also it will change because when where a setfunction it will call coponent again so it is new again

  //at end of the useState will return array with two elements
  // let arr = useState(restaurantsData);
  // console.log("arr", arr);
  // let [resData, setResData] = arr;
  // console.log("resData", resData);

  useEffect(() => {
    async function fetchResData() {
      try {
        const rawData = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await rawData.json();
        const restaurantsData =
          jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        console.log(
          "swiggy data",
          jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        //setResData we are setting for constitant data which will not change when filter is applied
        setResData(restaurantsData);
        //serFilterresData is setting manupulate dat
        setFilterResData(restaurantsData);
      } catch (error) {
        return error;
      }
    }
    fetchResData();
  }, []);
  console.log("render");

  // Conditional Rendering
  if (resData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          className="filter-btn"
          onClick={() => {
            console.log("searchtext", searchText);
            // we are taking resData which is data doesn't changes if there is a filter also
            let filterRes = resData.filter((res) => {
              console.log("O", res.info.name);
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            // setResData(filterRes);
            setFilterResData(filterRes);
          }}
        >
          Search
        </button>
      </div>
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            let filterlist = resData.filter((res) => {
              console.log("res.info.avgRating", res.info.avgRating);
              return res.info.avgRating > 4.4;
            });
            console.log("filterlist", filterlist);
            setResData(filterlist);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-cards-container">
        {filterResData.map((item, index) => (
          /**
           * key is used for unique of the list
           * key is only thing identify dom things
           * when ever is there an update or add same level of container(html level)
           * if we don't give key it will re-render entire level
           * in our case restaurantcard will rerender if we don't give key ,
           *
           * maximum don't use index for key
           * https://react.dev/learn/rendering-lists#why-does-react-need-keys
           * https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
           */
          <Link to={"/restaurant/" + item?.info?.id}>
            <RestaurantCard resData={item} key={item?.info?.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
