import ItemDetail from "./ItemDetail";

export default function Item({ title, price, picture, description }) {
  return (
    <div className="product-card">
      <p className="product-title">{title}</p>
      <p className="product-price">{price}</p>
      <img className="product-image" src={picture} alt={title} />
      <p>{description}</p>
      <button className="info-button" onClick={ItemDetail}>
        Más info
      </button>
    </div>
  );
}
