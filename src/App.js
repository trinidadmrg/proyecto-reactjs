import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/*       <div className="list-container">
        <ItemListContainer />
      </div> */}
      <ItemDetailContainer />
      <footer></footer>
    </>
  );
}

export default App;
