import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import "./ItemDetail.css";

export const ItemDetail = ({ item, onAdd, total }) => {
  console.log(item);
  return (
    <div>
      <div className={"containerItemDetail"}>
        <div className={"containerImage"}>
          <img src={item.img} alt="" />
        </div>

        <div className={"containerDetail"}>
          <h1 style={{ fontFamily: "Verdana" }}>
            <span style={{ fontSize: "10px" }}></span> {item.tituloProduct}
          </h1>
          <h2 style={{ fontFamily: "Verdana" }}>
            <span style={{ fontSize: "23px" }}></span> {item.descripcion}
          </h2>
          <h2 style={{ fontFamily: "Verdana" }}>
            <span style={{ fontSize: "23px" }}>Precio:</span> ${item.costo}
          </h2>
        </div>
      </div>
      {total && <h2>Ya tienes {total} en el carrito</h2>}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ItemCountContainer stock={item.stock} onAdd={onAdd} initial={total} />
      </div>
    </div>
  );
};
