const{ doPost, doGet } =  require('../utils/requestsUtils');

  const getOAuth = async (clientId, redirectUrl) => {
    const route = `/oauth/authorize?
    client_id=${clientId}
    &redirect_uri=${redirectUrl}
    &response_type=code&state=teste
    &scope=cart-write transactions-read
    webhooks-read webhooks-write orders-read
    products-read products-write
    purchases-read shipping-calculate shipping-cancel
    shipping-checkout shipping-companies shipping-generate
    shipping-preview shipping-print shipping-share
    shipping-tracking ecommerce-shipping`;
    const result = await doGet(route);
    return result;
  }

  const getToken = async (code, data) => {
    const route = `/oauth/token`;
    return await doPost(route, data);
  }

  const refreshToken = async (refreshToken, data) => {
    const route = `/oauth/token`;
    return await doPost(route, data);
  }

  const getAppInformations = async (token) => {
    const route = `/api/v2/me/shipment/app-settings`;
    return await doGet(route, token);
  }

module.exports = {
  getOAuth,
  getToken,
  refreshToken,
  getAppInformations
};
