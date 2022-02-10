export const productList = [
  {
    id: 1,
    title: "Caja temática Harry Potter",
    price: "$5.000 ARS",
    description: "Esta es la descripción del producto, trae varias cosas.",
    picture:
      "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2019/06/06153013/plain-shipping-boxes-packhelp-kva.jpg",
  },
  {
    id: 2,
    title: "Caja temática Lord of The Rings",
    price: "$5.000 ARS",
    description: "Esta es la descripción del producto, trae varias cosas.",
    picture:
      "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2019/06/06153013/plain-shipping-boxes-packhelp-kva.jpg",
  },
  {
    id: 3,
    title: "Caja temática Throne Of Glass",
    price: "$5.000 ARS",
    description: "Esta es la descripción del producto, trae varias cosas.",
    picture:
      "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2019/06/06153013/plain-shipping-boxes-packhelp-kva.jpg",
  },
  {
    id: 4,
    title: "Caja deluxe 31 days of reading",
    price: "$9.000 ARS",
    description: "Esta es la descripción del producto, trae varias cosas.",
    picture:
      "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2019/06/06153013/plain-shipping-boxes-packhelp-kva.jpg",
  },
  {
    id: 5,
    title: "Caja deluxe Halloween",
    price: "$9.000 ARS",
    description: "Esta es la descripción del producto, trae varias cosas.",
    picture:
      "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2019/06/06153013/plain-shipping-boxes-packhelp-kva.jpg",
  },
  {
    id: 6,
    title: "Suscripción mensual",
    price: "$3.500 ARS",
    description: "Esta es la descripción del producto, trae varias cosas.",
    picture:
      "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2019/06/06153013/plain-shipping-boxes-packhelp-kva.jpg",
  },
];

export const getList = (data, timeout) =>
  new Promise((res) =>
    setTimeout(() => {
      res(data);
    }, timeout)
  );
