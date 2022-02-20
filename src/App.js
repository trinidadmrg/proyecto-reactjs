import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import CartContextProvider from "./components/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <CartContextProvider>
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
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
