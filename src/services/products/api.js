import products from "./products.json";

export default {
  async fetchData() {
    return await products;
  },
};
