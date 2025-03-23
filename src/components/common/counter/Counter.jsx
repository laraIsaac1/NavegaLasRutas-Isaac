import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";
import "./counter.css";

const Counter = ({ item }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (item.stock > contador) {
      setContador(contador + 1);
    } else {
      alert("stock maximo");
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    let obj = { ...item, quantity: contador };
    addToCart(obj);
    toast.success("Producto agregado al carrito", { duration: 5000 });
  };

  return (
    <div className="counter-container">
      <div className="counter-controls">
        <button onClick={restar}>-</button>
        <h2>{contador}</h2>
        <button onClick={sumar}>+</button>
      </div>
      <button className="agregar-btn" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
