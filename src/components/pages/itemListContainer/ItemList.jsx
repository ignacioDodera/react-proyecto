import { ProductCard } from "../../common/ProductCard";
import "./ItemListContainer.css";
const ItemList = ({ products }) => {
  return (
    // lo que se ve en pantalla
    <div>
      <div className="cards-container">
        {products.map(({ id, img, tituloProduct, descripcion, costo }) => {
          return (
            <ProductCard
              key={id}
              img={img}
              tituloProduct={tituloProduct}
              descripcion={descripcion}
              costo={costo}
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
