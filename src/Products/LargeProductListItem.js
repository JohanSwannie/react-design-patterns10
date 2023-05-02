const LargeProductListItem = ({ product }) => {
  const { name, description, price, rating } = product;
  return (
    <>
      <h4>{name}</h4>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  );
};

export default LargeProductListItem;
