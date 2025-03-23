import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);

    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const resetCart = () => {
    setCart([]);
  };

  const removeById = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  const getTotalAmount = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.precio * elemento.quantity;
    }, 0);

    return total;
  };

  /*const getTotalAmount = () => {
    if (!cart || cart.length === 0) return 0; // Verifica si el carrito está vacío
    return cart.reduce((acc, product) => {
      if (!product.price || !product.stock) return acc; // Evita valores inválidos
      return acc + product.price * product.stock;
    }, 0);
  };*/

  /*const getTotalAmount = () => {
    return cart.reduce((total, product) => {
      return total + product.precio * (product.quantity || 1);
    }, 0);
  };*/

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };

  let data = {
    cart,
    addToCart,
    resetCart,
    removeById,
    getTotalAmount,
    getTotalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
