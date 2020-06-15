const { doPost, doGet } =  require('../utils/requestsUtils');

class Carriers {
  async listCariers() {
    const route = '/api/v2/me/shipment/companies';
    return await doGet(route);
  }

  async listCarierInformation(idTransportadora) {
    const route = `/api/v2/me/shipment/companies/${idTransportadora}`;
    return await doGet(route);
  }

  async listServices() {
    const route = '/api/v2/me/shipment/services';
    return await doGet(route);
  }

  async listServiceInformation(idServico) {
    const route = `/api/v2/me/shipment/services/${idServico}`;
    return await doGet(route);
  }

  async listAgencies() {
    const route = '/api/v2/me/shipment/agencies';
    return await doGet(route);
  }

  async listAgencieInformation(idAgencia) {
    const route = `/api/v2/me/shipment/agencies/${idAgencia}`;
    return await doGet(route);
  }

  async listAgencieByFilter(idTransportadora, uf, cidade) {
    const route = `/api/v2/me/shipment/agencies?company=${idTransportadora}&country=BR&state=${uf}&city=${cidade}`;
    const header = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return await doGet(route, header);
  }
}

module.exports = new Carriers();
