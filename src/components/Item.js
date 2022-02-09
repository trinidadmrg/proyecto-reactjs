export default function Item({ title, price, picture }) {
  return (
    <div className="product-card">
      <p className="product-title">{title}</p>
      <p className="product-price">{price}</p>
      <img className="product-image" src={picture} alt={title} />
    </div>
  );
}
