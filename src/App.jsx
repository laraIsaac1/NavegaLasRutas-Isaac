import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { NavBar } from "./components/layouts/navBar/NavBar";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkOut/CheckOut";
import Footer from "./components/layouts/footer/Footer";
import { CartContextProvider } from "./context/CartContext";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors duration={2000} />
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkOut" element={<Checkout />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />

          <Route path="*" element={<h2>404 Not found</h2>} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
