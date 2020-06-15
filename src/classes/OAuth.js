const{ doPost, doGet } =  require('../utils/requestsUtils');

class OAuth {
  async getOAuth(clientId, redirectUrl) {
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
    return await doGet(route);
  }

  async getToken(code, clientSecret, clientId, redirectUrl) {
    const route = `/oauth/token`;
    const data = {
      grant_type: 'authorization_code',
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUrl,
      code,
    };
    return await doPost(route, data);
  }

  async refreshToken(refreshToken, clientId, clientSecret) {
    const route = `/oauth/token`;
    const data = {
      grant_type: 'refresh_token',
      refresh_token,
      client_id: clientId,
      client_secret: clientSecret,
    };
    return await doPost(route, data);
  }

  async getAppInformations(token) {
    const route = `/api/v2/me/shipment/app-settings`;
    const header = {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return await doGet(route, header);
  }
}

export default new OAuth();
