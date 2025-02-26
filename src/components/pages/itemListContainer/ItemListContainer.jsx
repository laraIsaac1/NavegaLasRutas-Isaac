import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import "./itemListContainer.css";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let isAdmin = true;
      if (isAdmin) {
        resolve(
          categoria
            ? products.filter((elemento) => elemento.categoria === categoria)
            : products
        );
      } else {
        reject({ message: "algo salio mal", status: 400 });
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [categoria]);

  return (
    <section>
      <h2>PRODUCTOS</h2>
      <div className="contenedor-productos">
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};
