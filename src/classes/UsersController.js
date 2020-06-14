const { doPost, doGet } = require('../utils/requestsUtils');

class UsersController {
  async registerUser(token, data) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/register`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const data = {
      firstname: 'João',
      lastname: 'Silva',
      document: '99988877732',
      birthdate: '1945-01-05',
      email:'email@domain.com',
      password: 'password',
      phone_mobile: '5398783214',
      phone_fixed: '5333333333',
      company: 'Nome da loja',
      coupon: 'MELHORLOJA',
      terms: '1',
      address: {
        label: 'Meu Endereco',
        postal_code: '96020000',
        address: 'Rua General Osório',
        number: '596',
        complement: '',
        district: 'Centro',
        city: 'Pelotas',
        state_abbr: 'RS',
        country: 'BR'
      }
    }
    const result = await doPost(url, data, header);
    return result;
  }

  async listUserInformation(token) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me`;
    const headers = {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const result = await doGet(url, headers);
    return result;
  }

  async listUserAddress(token) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/addresses`;
    const headers = {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const result = await doGet(url, headers);
    return result;
  }

  async getUserBalance(token) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/balance`;
    const headers = {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const result = await doGet(url, headers);

    return result;
  }

  async addUserBalance(token, data) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/balance`;
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const data = {
      gateway: "mercado-pago",
      redirect: process.env.MELHOR_ENVIO_REDIRECT_URL,
      value
    };
    const result = await doPost(url, data, headers);

    return result;
  }

  async listShipments(token) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/orders?status={pending|released|posted|delivered|canceled|undelivered}`;
    const headers = {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const result = await doGet(url, headers);
    return result;
  }
}

module.exports = new UsersController();
