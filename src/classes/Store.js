const { doPost, doGet} = require('../utils/requestsUtils');

class Store {
  async registerStore(token, data) {
    const route = `/api/v2/me/companies`;
    return await doPost(route, data, token);
  }

  async saveAddress(token, idLoja, data) {
    const route = `/api/v2/me/companies/${idLoja}/addresses`;
    return await doPost(route, data, token);
  }

  async savePhone(token, idLoja, data) {
    const route = `/api/v2/me/companies/${idLoja}/phones`;
    return await doPost(route, data, token);
  }

  async sendStorePicture(token, idLoja, data) {
    const route = `/api/v2/me/companies/${idLoja}/picture`;
    return await doPost(route, data, token);
  }

  async listStores(token) {
    const route = `/api/v2/me/companies`;
    return await doGet(route, token);
  }

  async searchStore(token, idLoja) {
    const route = `/api/v2/me/companies/${idLoja}`;
    return await doGet(route, token);
  }
}

module.exports = new Store();
