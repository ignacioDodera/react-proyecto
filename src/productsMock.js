export let products = [
  {
    tituloProduct: "Blue Label",
    costo: 500,
    descripcion:
      "Beber con moderación. Prohibida su venta a menores de 18 años.",
    img: "https://res.cloudinary.com/dfxzcxic6/image/upload/v1711229060/J.Walker-blue-clasico_zewkr1.jpg",
    stock: 12,
    category: "WHISKY",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};
