import { doPost, doGet } from '../utils/requestsUtils';

class CarriersController {
  async listCariers(req, res) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/companies`;
    const result = await doGet(url);

    return res.json({ result });
  }

  async listCarierInformation(req, res) {
    const { id_transportadora } = req.body;
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/companies/${id_transportadora}`;
    const result = await doGet(url);

    return res.json({ result });
  }

  async listServices(req, res) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/services`;
    const result = await doGet(url);

    return res.json({ result });
  }

  async listServiceInformation(req, res) {
    const { id_servico } = req.body;
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/services/${id_servico}`;
    const result = await doGet(url);

    return res.json({ result });
  }

  async listAgencies(req, res) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/agencies`;
    const result = await doGet(url);

    return res.json({ result });
  }

  async listAgencieInformation(req, res) {
    const { id_agencia } = req.body;
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/agencies/${id_agencia}`;
    const result = await doGet(url);

    return res.json({ result });
  }

  async listAgencieByFilter(req, res) {
    const { id_transportadora, uf, cidade } = req.body;
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/agencies?company=${id_transportadora}&country=BR&state=${uf}&city=${cidade}`;
    const header = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const result = await doGet(url, header);

    return res.json({ result });
  }
}

export default new CarriersController();
