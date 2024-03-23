import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { CardSkeleton } from "../../common/CardSkeleton";
const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    let productsCollection = collection(db, "products");

    let consulta;

    if (category) {
      let productColectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );

      consulta = productColectionFiltered;
    } else {
      consulta = productsCollection;
    }

    getDocs(consulta)
      .then((res) => {
        let arrayBien = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });

        setProducts(arrayBien);
      })

      .finally(() => setIsLoading(false));
  }, [category]);

  if (isLoading) {
    return (
      <div className="cards-container">
        {category ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
      </div>
    );
  }
  return (
    // return con ternario
    <ItemList products={products} />
  );
};

export default ItemListContainer;
