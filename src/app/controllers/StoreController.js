import { doPost, doGet} from '../utils/requestsUtils';

class StoreController {
  async registerStore(req, res) {
    const { token } = req.body;
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
    return res.json({ result });
  }

  async saveAddress(req, res) {
    const { token, id_loja } = req.body;
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/companies/${id_loja}/addresses`;
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
    return res.json({ result });
  }

  async savePhone(req, res) {
    const { token, id_loja } = req.body;
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/companies/${id_loja}/phones`;
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
    return res.json({ result });
  }

  async sendStorePicture(req, res) {
    const { file } = req;
    const { token, id_loja } = req.body;
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/companies/${id_loja}/picture`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };

    const data = { file };

    const result = await doPost(url, data, header);
    return res.json({ result });
  }

  async listStores(req, res) {
    const { token } = req.body;
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/companies`;
    const header = {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    };

    const result = await doGet(url, header);
    return res.json({ result });

  }

  async searchStore(req, res) {
    const { token, id_loja } = req.body;
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/companies/${id_loja}`;
    const header = {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    };

    const result = await doGet(url, header);
    return res.json({ result });
  }

}

export default new StoreController();
