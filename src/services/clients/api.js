import clients from "./clients.json";

export default {
  async fetchData() {
    return await clients;
  },
};
