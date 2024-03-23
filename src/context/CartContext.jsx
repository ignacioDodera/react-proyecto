import { createContext, useState } from "react";

// Este componente retorna un cotexto

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    let existe2 = estaEnCart(product.id);

    if (existe2) {
      let nuevoArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(nuevoArray);
      localStorage.setItem("cart", JSON.stringify(nuevoArray));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify(...cart, product));
    }
  };
  const eliminarCart = () => {
    //pongo un arreglo vacio para borrar el contenido
    setCart([]);
    localStorage.removeItem("cart");
  };
  const estaEnCart = (id) => {
    let existe = cart.some((elemeto) => elemeto.id === id);
    return existe;
  };
  const remover = (id) => {
    // el filter se usa para filtrar todos los elementos segun 1 elementoy crar una nueva array
    let nuevo = cart.filter((elemento) => elemento.id !== id);

    setCart(nuevo);
    localStorage.setItem("cart", JSON.stringify(nuevo));
  };

  function getTotalItems() {
    let totalItems = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return totalItems;
  }

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.costo;
    }, 0);

    return total;
  };

  const getTotalQuantity = (id) => {
    let product = cart.find((elemento) => elemento.id === id);

    if (product) {
      return product.quantity;
    } else {
      return product;
    }
  };

  let data = {
    cart,
    addToCart,
    eliminarCart,
    remover,
    getTotalItems,
    getTotalPrice,
    getTotalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
