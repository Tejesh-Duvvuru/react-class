import { CDN_URL_IMG } from "../utils/constants";

const rescardStylecard = {
  backgroundColor: "whitesmoke",
};
const RestaurantCard = (props) => {
  /**
   * props is short from name properties
   * props is nothing but a argument passing a function
   *
   */
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.info;
  // const { resName, cusine, img } = resData;
  return (
    <div className="res-card" style={rescardStylecard}>
      <img
        className="res-card-img"
        src={CDN_URL_IMG + resData.info.cloudinaryImageId}
        alt="res img"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>20 mins</h4>
    </div>
  );
};

export default RestaurantCard;
