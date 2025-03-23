import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { products } from "../../../products"; ya no uso el archivo products.js . Traigo la info de la base de datos
import { ProductCard } from "../../common/productCard/ProductCard";
import "./itemListContainer.css";
import { db } from "../../../firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    let refCollection = collection(db, "products");
    let consulta = refCollection;
    if (categoria) {
      consulta = query(refCollection, where("categoria", "==", categoria));
    }
    const getProducts = getDocs(consulta);

    getProducts
      .then((res) => {
        const nuevoArray = res.docs.map((elemento) => {
          return { id: elemento.id, ...elemento.data() }; //para desencriptar lo raro que viene en la consola y que muestre los productos como están en la db
        });
        setItems(nuevoArray);
      })
      .catch((error) => console.log(error));
  }, [categoria]);

  //función para cargar todos los productos de una vez apretando el botón "cargar Productos"
  /*const cargar = () => {
    let refCollection = collection(db, "products"); //apunta a la colección products que ya existe de la db
    products.forEach((product) => {
      addDoc(refCollection, product);
    });
  };*/

  return (
    <section>
      {/*<button onClick={cargar}>cargar Productos</button>*/}
      <h2>PRODUCTOS</h2>
      <div className="contenedor-productos">
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};
