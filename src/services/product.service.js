import axios from "axios";

export const getProducts = async () => {
  const data = await axios.get("https://fakestoreapi.com/products?limit=10");
  return data.data;
};

export const getProductsBy = async (category) => {
  const data = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  if (data.data.length <= 5) {
    return data.data;
  } else {
    return data.data.slice(1, 6);
  }
  // return data.data.length;
};

export const getProductId = async ({ id }) => {
  const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data.data;
};
