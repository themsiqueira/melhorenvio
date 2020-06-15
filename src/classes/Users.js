const { doPost, doGet } = require('../utils/requestsUtils');

class Users {
  async registerUser(token, data) {
    const route = `/api/v2/register`;
    return await doPost(route, data, token);
  }

  async listUserInformation(token) {
    const route = `/api/v2/me`;
    return await doGet(route);
  }

  async listUserAddress(token) {
    const route = `/api/v2/me/addresses`;
    return await doGet(route, token);
  }

  async getUserBalance(token) {
    const route = `/api/v2/me/balance`;
    return await doGet(route, token);
  }

  async addUserBalance(token, data) {
    const route = `/api/v2/me/balance`;
    return await doPost(route, data, token);
  }

  async listShipments(token) {
    const route = `/api/v2/me/orders?status={pending|released|posted|delivered|canceled|undelivered}`;
    return await doGet(route, token);
  }
}

module.exports = new Users();
