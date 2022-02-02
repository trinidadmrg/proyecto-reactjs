import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Aquí iran los Items!" />
      <footer></footer>
    </>
  );
}

export default App;
