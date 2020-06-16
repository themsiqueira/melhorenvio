const RequestUtils = require('../Utils/RequestRequestUtils');

class Users {
  routePath = '/api/v2'

  async signup({ data, token }) {
    const result = await RequestUtils.doPost({
      route: `${this.routePath}/register`,
      data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return result
  }

  async listUserInformation(token) {
    const result = await RequestUtils.doGet({
      route: `${this.routePath}/me`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return result
  }

  async listUserAddress(token) {
    const result = await RequestUtils.doGet({
      route: `${this.routePath}/me/addresses`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return result
  }

  async userBalance(token) {
    const result = await RequestUtils.doGet({
      route: `${this.routePath}/me/balance`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return result
  }

  async insertBalanceWallet({data, token}) {
    const result = await RequestUtils.doPost({
      route: `${this.routePath}/register`,
      data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return result
  }
}
module.exports = new Users();
