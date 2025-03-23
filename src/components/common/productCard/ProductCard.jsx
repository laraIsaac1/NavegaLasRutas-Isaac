import { Link } from "react-router-dom";
import "./productCard.css";

export const ProductCard = ({ item }) => {
  return (
    <div className="card-container">
      <img className="imagen-producto" src={item.imageUrl} alt="" />
      <h2>{item.titulo}</h2>
      <h2>${item.precio}</h2>
      <Link className="link-detalle" to={`/itemDetail/${item.id}`}>
        Ver detalle
      </Link>
    </div>
  );
};

export default ProductCard;
