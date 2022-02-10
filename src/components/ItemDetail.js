import Item from "./Item";
import ItemCount from "./ItemCount";

function onAdd(count) {
  alert(count);
}

const ItemDetail = ({ item }) => {
  return (
    <div className="details-container">
      <img className="details-image" src={item.picture} alt="imagen" />
      <div className="details-texts">
        <p className="details-title">{item.title}</p>
        <p className="details-description">{item.description}</p>
        <p className="details-price">{item.price}</p>
        <ItemCount stock={5} initial={0} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
