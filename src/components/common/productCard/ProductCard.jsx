import { Link } from "react-router-dom";
import "./productCard.css";

export const ProductCard = ({ item }) => {
  return (
    <div className="card-container">
      <img className="imagen-producto" src={item.imageUrl} alt="" />
      <h2>{item.title}</h2>
      <h2>{item.price}</h2>
      <Link className="link-detalle" to={`/itemDetail/${item.id}`}>
        Detalle
      </Link>
      <Link className="link-agregaCarrito" to={"/cart"}>
        Agregar al carrito
      </Link>
    </div>
  );
};

export default ProductCard;
