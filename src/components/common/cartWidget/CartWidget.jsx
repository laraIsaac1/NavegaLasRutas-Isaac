import { IoMdCart } from "react-icons/io";
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <div className="cart-container">
      <IoMdCart className="cart-Icon" />
      <h3 className="cart-number">0</h3>
    </div>
  );
};
