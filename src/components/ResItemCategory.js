import { useState } from "react";
import SuggItems from "./SuggItems";

const ResItemCategory = ({ data, showItem, setShowIndex }) => {
  // const [showItem, setShowItem] = useState(true);
  return (
    <div className="p-3">
      <div
        className="flex flex-row cursor-pointer"
        onClick={() => {
          // setShowItem(!showItem)
          //this is called state lifiting (child to parent)
          //this component is also called and uncontrolled component because it is controlling by the parent component
          setShowIndex();
        }}
      >
        <h1 className="font-bold mr-20">{data?.card?.card?.title}</h1>
        <h1 className="">▼</h1>
      </div>
      {data?.card?.card?.itemCards.map(
        (item) => showItem && <SuggItems data={item} key={item.card.info.id} />
      )}
    </div>
  );
};

export default ResItemCategory;
