import { Link } from "react-router-dom";

export default function Item({ id, title, price, picture, description }) {
  /* It returns the item's information*/
  return (
    <div className="product-card">
      <p className="product-title">{title}</p>
      <p className="product-price">{price}</p>
      <img className="product-image" src={picture} alt={title} />
      <p>{description}</p>
      <Link className="button-link" to={`/item/${id}`}>
        <button className="info-button">Más info</button>
      </Link>
    </div>
  );
}
