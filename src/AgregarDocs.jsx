import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { products } from "./productsMock";

export const AgregarDocs = () => {
  const rellenar = () => {
    let productsColletion = collection(db, "products");

    products.forEach((product) => {
      addDoc(productsColletion, product);
    });
  };

  return (
    <div>
      <button onClick={rellenar}>agregar documentos</button>
    </div>
  );
};
