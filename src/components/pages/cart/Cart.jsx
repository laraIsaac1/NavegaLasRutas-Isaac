import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";

const Cart = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (
    <div>
      <h1>CARRITO</h1>
      <div>
        {cart.map((product) => {
          return (
            <div key={product.id} className="cart-item">
              <h2>{product.titulo}</h2>
              <h3>{product.precio}</h3>
              <h3>x{product.quantity}</h3>
              <img className="image-product" src={product.imageUrl} alt="" />
              <button onClick={() => removeById(product.id)}>Eliminar</button>
            </div>
          );
        })}
      </div>
      <h2 className="cart-total">El total a pagar es ${total}</h2>

      <div className="cart-buttons">
        <button onClick={resetCart}>Vaciar carrito</button>
        <Link to="/checkout">Finalizar compra</Link>
      </div>
    </div>
  );
};

export default Cart;
