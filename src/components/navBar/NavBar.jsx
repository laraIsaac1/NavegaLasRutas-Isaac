import { CartWidget } from "../cartWidget/CartWidget";
import "./navBar.css";

export const NavBar = () => {
  return (
    <nav>
      <h2>Tienda</h2>
      <ul>
        <li>Categoria 1</li>
        <li>Categoria 2</li>
        <li>Categoria 3</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
