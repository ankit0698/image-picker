const ProductCard = ({
  image,
  title,
  description,
  price,
  buttonText,
  onClick,
}) => {
  return (
    <div className="grid-item">
      <img src={image} alt={title} />
      <p className="text-semibold">{title}</p>
      <p className="text-normal">{description}</p>
      <p>${price}</p>
      {buttonText && <button onClick={onClick}>{buttonText}</button>}
    </div>
  );
};

export default ProductCard;
