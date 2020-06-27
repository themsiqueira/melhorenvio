const RequestUtils = require('../utils/RequestUtils');

class Carriers {
  routePath = 'api/v2/me/shipment';
  
  async listCarriers() {
    const result = await RequestUtils.doRequest({
      method: 'get',
      route: `${this.routePath}/companies/`
    })

    return result
  }

  async listCarrierInformation({ id }) {
    const result = await RequestUtils.doRequest({
      method: 'get',
      route: `${this.routePath}/companies/${id}`
    })

    return result
  }

  async listServices() {
    const result = await RequestUtils.doRequest({
      method: 'get',
      route: `${this.routePath}/services/`
    })

    return result
  }

  async listServiceInformation({ id }) {
    const result = await RequestUtils.doRequest({ 
      method: 'get',
      route: `${this.routePath}/services/${id}`
    })

    return result
  }

  async listAgencies() {
    const result = await RequestUtils.doRequest({
      method: 'get',
      route: `${this.routePath}/agencies/`
    })

    return result
  }

  async listAgencyInformation({ id }) {
    const result = await RequestUtils.doRequest({
      method: 'get',
      route: `${this.routePath}/agencies/${id}`
    })

    return result
  }

  async listFilterAgency({ idTransportadora = null, country = null, state = null, city = null }) {
    const haveCountry = country ? `&country=${country}` : '';
    const haveState = state ? `&state=${state}` : '';
    const haveCity = city ? `&city=${city}` : '';
    const result =  RequestUtils.doRequest({
      method: 'get',
      route: `${this.routePath}/agencies?company=${idTransportadora}${haveCountry}${haveState}${haveCity}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
    
    return result
  }
}

module.exports = new Carriers();
