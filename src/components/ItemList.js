import Item from "./Item";

export default function ItemList({ items }) {
  return items.map((item, index) => (
    <Item key={index} id={item.id} title={item.title} picture={item.picture} />
  ));
}
