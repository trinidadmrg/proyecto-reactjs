import Item from "./Item";

export default function ItemList({ lista }) {
  return lista.map((item, index) => (
    <>
      <Item key={index} title={item.title} picture={item.picture} />
    </>
  ));
}
