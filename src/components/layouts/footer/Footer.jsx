import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img
          className="logo"
          src="https://res.cloudinary.com/dadbyb4uo/image/upload/v1740497501/images-removebg-preview_dsvgbe.png"
          alt=""
        />
      </Link>

      <h2>Contactenos al +549 123456</h2>
    </footer>
  );
};

export default Footer;
