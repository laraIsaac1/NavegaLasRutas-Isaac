import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../products";
import "./itemDetail.css";

export const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    let product = products.find((element) => element.id === id);
    setItem(product);
  }, [id]);

  /*if (!item) {
    return <h2>No lo encuentra</h2>;
  }*/

  return (
    <div className="detalle-producto">
      <h1>{item.titulo}</h1>
      <img src={item.imageUrl} alt="" />
      <p>{item.descripcion}</p>
    </div>
  );
};

export default ItemDetail;
