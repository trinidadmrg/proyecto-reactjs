import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Aquí iran los Items!" />
      <ItemCount />
      <footer></footer>
    </>
  );
}

export default App;
