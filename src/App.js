import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  function onAdd(count) {
    alert(count);
  }

  return (
    <>
      <Navbar />
      <div className="list-container">
        <ItemListContainer />
      </div>
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
      <footer></footer>
    </>
  );
}

export default App;
