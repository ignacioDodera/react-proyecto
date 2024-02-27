export let products = [
  {
    id: 1,
    tituloProduct: "Ron BACARDI Carta ORO",
    costo: 700,
    descripcion:
      "Beber con moderación. Prohibida su venta a menores de 18 años.",
    img: "https://res.cloudinary.com/dfxzcxic6/image/upload/v1708263151/Ron-BACARDI-oro-750-ml-0_dsszrg.webp",
    stock: 12,
    category: "RON",
  },
  {
    id: 2,
    tituloProduct: "Ron BACARDI Carta BLANCA",
    costo: 650,
    descripcion:
      "Beber con moderación. Prohibida su venta a menores de 18 años.",
    img: "https://res.cloudinary.com/dfxzcxic6/image/upload/v1709046515/75f26951-57a0-4ee8-8b0d-c15ffa55e4f1_vzwrvx.jpg",
    stock: 12,
    category: "RON",
  },
  {
    id: 3,
    tituloProduct: "Red Label",
    costo: 1000,
    descripcion:
      "Beber con moderación. Prohibida su venta a menores de 18 años.",
    img: "https://res.cloudinary.com/dfxzcxic6/image/upload/v1708263166/johnnie-walker-red-label-johnnie-walker-red-label_bsecue.jpg",
    stock: 12,
    category: "WHISKY",
  },
  {
    id: 4,
    tituloProduct: "Smirnoff",
    costo: 500,
    descripcion:
      "Beber con moderación. Prohibida su venta a menores de 18 años.",
    img: "https://res.cloudinary.com/dfxzcxic6/image/upload/v1709046195/0002176_smirnoff-red-no21-vodka-1-litre_svqxvz.jpg",
    stock: 12,
    category: "VODKA",
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
