import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="list-container">
              <ItemListContainer />
            </div>
          }
        />
        <Route
          path="/category/:idCategory"
          element={
            <div className="list-container">
              <ItemListContainer />
            </div>
          }
        />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
