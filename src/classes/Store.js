const { doPost, doGet} = require('../utils/requestsUtils');

class Store {
  async registerStore(token, data) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/companies`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const data = {
        name: "Melhor Loja",
        email: "contato@melhorloja.me",
        description: "Descrição da loja",
        company_name: "Nome da Loja",
        document: "89.157.108/0001-04",
        state_register: "476.210.979.481"
    }
    const result = await doPost(url, data, header);
    return result;
  }

  async saveAddress(token, idLoja, data) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/companies/${idLoja}/addresses`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const data = {
      postal_code: "01010010",
      address: "Av. Teste",
      number: "123",
      complement: "ABC",
      city: "São Paulo",
      state: "SP"
    }
    const result = await doPost(url, data, header);
    return result;
  }

  async savePhone(token, idLoja, data) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/companies/${idLoja}/phones`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const data = {
      type: "mobile",
      phone: "11981778899"
    }
    const result = await doPost(url, data, header);
    return result;
  }

  async sendStorePicture(token, idLoja, data) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/companies/${idLoja}/picture`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const data = { file };
    const result = await doPost(url, data, header);
    return result;
  }

  async listStores(token) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/companies`;
    const header = {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const result = await doGet(url, header);
    return result;
  }

  async searchStore(token, idLoja) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/companies/${idLoja}`;
    const header = {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const result = await doGet(url, header);
    return result;
  }

}

module.exports = new Store();
