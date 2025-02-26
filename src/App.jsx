import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { NavBar } from "./components/layouts/navBar/NavBar";
import { ItemDetail } from "./components/pages/itemDetail/ItemDetail";
import { Cart } from "./components/pages/cart/Cart";
import { Footer } from "./components/layouts/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<h2>404 Not found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
