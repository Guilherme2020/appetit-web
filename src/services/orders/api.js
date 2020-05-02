import orders from "./orders.json";

export default {
  async fetchData() {
    return await orders;
  },
};
