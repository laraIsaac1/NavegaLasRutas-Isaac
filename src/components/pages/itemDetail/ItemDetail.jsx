import { useEffect, useState } from "react";

import { useParams } from "react-router";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import "./itemDetail.css";

const ItemDetail = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);

    const getProduct = getDoc(refDoc);
    getProduct
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h1>{item.titulo}</h1>
      <div className="contenedor-item">
        <img src={item.imageUrl} alt="" />
        <p>{item.descripcion}</p>
        <h2>Cantidad</h2>
        <Counter item={item} />
      </div>
    </div>
  );
};

export default ItemDetail;
