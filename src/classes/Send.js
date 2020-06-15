const { doPost, doGet, doDel } = require('../utils/requestsUtils');

class Send {
  async calcProductFreight(token, data) {
    const route = `/api/v2/me/shipment/calculate`;
    return await doPost(route, data, token);
  }

  async calcPackageFreight(token, data) {
    const route = `/api/v2/me/shipment/calculate`;
    return await doPost(route, data, token);
  }

  async insertFreightsInCart(token, data) {
    const route = `/api/v2/me/cart`
    return await doPost(route, data, token);
  }

  async listCart(token) {
    const route = `/api/v2/me/cart/6e1c864a-fe48-4ae7-baaa-d6e4888bafd2`;
    return await doGet(route, token);
  }

  async removeCartItems(token, data) {
    const route = `/api/v2/me/cart/6e1c864a-fe48-4ae7-baaa-d6e4888bafd2`;
    return await doDel(route, data, token)

  }

  async orderCheckout(token, data) {
    const route = `/api/v2/me/shipment/checkout`;
    return await doPost(route, data, token);
  }

  async previewTicket(token, data) {
    const route = `/api/v2/me/shipment/preview`;
    return await doPost(route, data, token);
  }

  async generateTicket(token, data) {
    const route = `/api/v2/me/shipment/generate`;
    return await doPost(route, data, token);
  }

  async printTicket(token, data) {
    const route = `/api/v2/me/shipment/print`;
    return await doPost(route, data, token);
  }

  async searchTicket(token) {
    const route = `/api/v2/me/orders/search?q={id|protocol|tracking|authorization_code|self_tracking}`;
    return await doGet(route, token);
  }

  async cancelTicket(token, data) {
    const route = `/api/v2/me/shipment/cancel`;
    return await doPost(route, data, token);
  }

  async verifyTicketCanceability(data, token) {
    const route = `/api/v2/me/shipment/cancellable`;
    return await doGet(route, data, token);
  }

  async trackShipment(token, data) {
    const route = `/api/v2/me/shipment/tracking`;
    return await doPost(route, data, token);
  }
}

module.exports = new Send();
