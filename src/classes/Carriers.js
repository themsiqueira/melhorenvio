const RequestUtils = require('../utils/RequestUtils');

class Carriers {
  routePath = '/api/v2/me/shipment';
  
  async listCarriers() {
    const result = await RequestUtils.doGet({
      route: `${this.routePath}/companies/`
    })

    return result
  }

  async listCarrierInformation(id) {
    const result = await RequestUtils.doGet({
      route: `${this.routePath}/companies/${id}`
    })

    return result
  }

  async listServices() {
    const result = await RequestUtils.doGet({
      route: `${this.routePath}/services/`
    })

    return result
  }

  async listServiceInformation(id) {
    const result = await RequestUtils.doGet({ 
      route: `${this.routePath}/services/${id}`
    })

    return result
  }

  async listAgencies() {
    const result = await RequestUtils.doGet({
      route: `${this.routePath}/agencies/`
    })

    return result
  }

  async listAgencyInformation() {
    const result = await RequestUtils.doGet({ 
      route: `${this.routePath}/agencies/${id}`
    })

    return result
  }

  async listFilterAgency(params) {
    const result =  RequestUtils.doGet({
      route: `${this.routePath}/services/`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      query: params
    })
    
    return result
  }
}

module.exports = new Carriers();
