import { useContext, useState } from "react";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

import "./checkOut.css";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const navigate = useNavigate();

  const handleCancel = () => {
    resetCart();
    navigate("/");
  };

  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const funcionFormulario = (evento) => {
    evento.preventDefault();
    let total = getTotalAmount();
    let ordersCollection = collection(db, "orders");
    let order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    let promesaCompra = addDoc(ordersCollection, order);
    promesaCompra.then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let productsCollection = collection(db, "products");

    order.items.forEach((elemento) => {
      let refDoc = doc(productsCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });
  };

  const funcionInputs = (evento) => {
    const { value, name } = evento.target; // {}
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      {orderId ? (
        <h2>Su numero de compra es {orderId}</h2>
      ) : (
        <form onSubmit={funcionFormulario} className="form-container">
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={funcionInputs}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={funcionInputs}
          />
          <input
            type="text"
            placeholder="Telefono"
            name="telefono"
            onChange={funcionInputs}
          />
          <button>Enviar</button>
          <button type="button" onClick={handleCancel}>
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
