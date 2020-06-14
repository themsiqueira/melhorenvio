import { doPost, doGet } from '../utils/requestsUtils';

class OAuthController {
  async getOAuth(req, res) {
    const url = `${process.env.MELHOR_ENVIO_URL}/oauth/authorize?
    client_id=${process.env.MELHOR_ENVIO_CLIENT_ID}
    &redirect_uri=${process.env.MELHOR_ENVIO_REDIRECT_URL}
    &response_type=code&state=teste
    &scope=cart-write transactions-read
    webhooks-read webhooks-write orders-read
    products-read products-write
    purchases-read shipping-calculate shipping-cancel
    shipping-checkout shipping-companies shipping-generate
    shipping-preview shipping-print shipping-share
    shipping-tracking ecommerce-shipping`;
    const result = await doGet(url);
    return res.json({ result });
  }

  async getToken(req, res) {
    const { code } = req.body;
    const url = `${process.env.MELHOR_ENVIO_URL}/oauth/token`;
    const data = {
      grant_type: 'authorization_code',
      client_id: process.env.MELHOR_ENVIO_CLIENT_ID,
      client_secret: process.env.MELHOR_ENVIO_CLIENT_SECRET,
      redirect_uri: process.env.MELHOR_ENVIO_REDIRECT_URL,
      code,
    };
    const result = await doPost(url, data);

    return res.json({ result });
  }

  async refreshToken(req, res) {
    const { refresh_token } = req.body;
    const url = `${process.env.MELHOR_ENVIO_URL}/oauth/token`;
    const data = {
      grant_type: 'refresh_token',
      refresh_token,
      client_id: process.env.MELHOR_ENVIO_CLIENT_ID,
      client_secret: process.env.MELHOR_ENVIO_CLIENT_SECRET,
    };
    const result = await doPost(url, data);

    return res.json({ result });
  }

  async getAppInformations(req, res) {
    const { token } = req.body;
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/app-settings`;
    const header = `
    Accept: application/json
    Authorization: Bearer ${token}`;
    const result = await doGet(url, header);
    return res.json({ result });
  }
}

export default new OAuthController();
