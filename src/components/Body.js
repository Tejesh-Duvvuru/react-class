import RestaurantCard from "./RestaurantCard";
import restaurantsData from "../utils/mockData";
import { useState } from "react";
// react hook is a normalfunction which is a like utility

const Body = () => {
  //when ever a state value updates react will rerender it
  // let [resData, setResData]
  let arr = useState(restaurantsData);
  console.log("arr", arr);
  let [resData, setResData] = arr;
  console.log("resData", resData);
  return (
    <div className="body">
      <div className="search">Search</div>
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
        {resData.map((item, index) => (
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
          <RestaurantCard resData={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
