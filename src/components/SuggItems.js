const SuggItems = (props) => {
  const { data } = props;
  const { name, price, defaultPrice, imageId, ratings, description } =
    data.card.info;
  return (
    <div>
      <h1>{name}</h1>
      <h2>Rs {price ? price / 100 : defaultPrice / 100}</h2>
      <h1 className="border-b-2 border-gray-500"></h1>
    </div>
  );
};

export default SuggItems;
