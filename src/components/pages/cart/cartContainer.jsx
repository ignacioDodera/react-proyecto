import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import "./Cart.css";

export const CartContainer = () => {
  const { cart, eliminarCart, remover, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  const { getTotalItems } = useContext(CartContext);

  let items = getTotalItems();

  const limpiarConAlerta = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No, dejalo como estaba`,
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarCart();
        Swal.fire("Eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h2>{item.tituloProduct}</h2>
                  <h2>${item.costo}</h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <Button variant="contained" onClick={() => remover(item.id)}>
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h2>Descripcion del carrito:</h2>
          <h3>Cantidad de productos: {items}</h3>
          <h3>Precio total: {total}</h3>

          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button onClick={limpiarConAlerta} variant="contained">
                Vaciar carrito
              </Button>
              <Link to="/checkout">
                <Button variant="contained">Finalizar compra</Button>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Agrega productos</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
