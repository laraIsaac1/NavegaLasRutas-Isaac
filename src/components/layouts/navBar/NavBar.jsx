import { Link } from "react-router-dom";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navBar.css";

export const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img
          className="logo"
          src="https://res.cloudinary.com/dadbyb4uo/image/upload/v1740497501/images-removebg-preview_dsvgbe.png"
          alt=""
        />
      </Link>
      <ul className="categorias-style">
        <Link to="/categoria/Carnes">Carnes</Link>

        <Link to="/categoria/Hamburguesas">Hamburguesas</Link>

        <Link to="/categoria/Chacinados">Chacinados</Link>
      </ul>
      <Link className="link-carrito" to="/cart">
        {" "}
        <CartWidget />{" "}
      </Link>
    </nav>
  );
};
