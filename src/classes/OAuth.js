const{ doPost, doGet } =  require('../utils/requestsUtils');

class OAuth {
  async getOAuth(clientId, redirectUrl) {
    const url = `${process.env.MELHOR_ENVIO_URL}/oauth/authorize?
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
    const result = await doGet(url);
    return result;
  }

  async getToken(code, clientSecret, clientId, redirectUrl) {
    const url = `${process.env.MELHOR_ENVIO_URL}/oauth/token`;
    const data = {
      grant_type: 'authorization_code',
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUrl,
      code,
    };
    const result = await doPost(url, data);
    return result;
  }

  async refreshToken(refreshToken, clientId, clientSecret) {
    const url = `${process.env.MELHOR_ENVIO_URL}/oauth/token`;
    const data = {
      grant_type: 'refresh_token',
      refresh_token,
      client_id: clientId,
      client_secret: clientSecret,
    };
    const result = await doPost(url, data);
    return result;
  }

  async getAppInformations(token) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/app-settings`;
    const header = {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const result = await doGet(url, header);
    return result;
  }
}

export default new OAuth();
