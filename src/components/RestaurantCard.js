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
  const { deliveryTime } = resData?.info?.sla;
  // console.log("pppppppppppppp", resData?.info?.sla);
  // const { resName, cusine, img } = resData;
  return (
    <div
      className="mx-1.5  my-1 w-[250px] p-1 rounded-md bg-slate-400 shadow-md"
      style={rescardStylecard}
    >
      <img
        className="res-card-img  w-[250px] rounded-t"
        src={CDN_URL_IMG + resData.info.cloudinaryImageId}
        alt="res img"
      />
      <h3 className="text-black text-base max-w-prose font-medium">{name}</h3>
      <h4 className="">{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export const withPromtedLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
