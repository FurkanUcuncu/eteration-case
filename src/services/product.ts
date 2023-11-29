import { api } from "./api";

const products = () => {
  return api({
    url: "/products",
    method: "GET",
  });
};

const productServices = {
  products,
};

export default productServices;
