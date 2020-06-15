const { doPost, doGet } =  require('../utils/requestsUtils');

class Carriers {
  async listCariers() {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/companies`;
    const result = await doGet(url);
    return result;
  }

  async listCarierInformation(idTransportadora) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/companies/${idTransportadora}`;
    const result = await doGet(url);
    return result;
  }

  async listServices() {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/services`;
    const result = await doGet(url);
    return result;
  }

  async listServiceInformation(idServico) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/services/${idServico}`;
    const result = await doGet(url);
    return result;
  }

  async listAgencies() {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/agencies`;
    const result = await doGet(url);
    return result;
  }

  async listAgencieInformation(idAgencia) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/agencies/${idAgencia}`;
    const result = await doGet(url);
    return result;
  }

  async listAgencieByFilter(idTransportadora, uf, cidade) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/agencies?company=${idTransportadora}&country=BR&state=${uf}&city=${cidade}`;
    const header = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const result = await doGet(url, header);
    return result;
  }
}

module.exports = new Carriers();
