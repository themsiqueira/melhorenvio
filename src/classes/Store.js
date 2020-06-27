const RequestUtils = require('../utils/RequestUtils');

class Store {
  routePath = 'api/v2/me/companies';

  async signup({ data, token }) {
    const result = await RequestUtils.doRequest({
      method: 'post',
      route: `${this.routePath}`,
      data: JSON.stringify(data),
      headers: { 
        'Accept': 'application/json', 
        'Content-type': 'application/json', 
        'Authorization': `Bearer ${token}`
      },
    });

    return result;
  }

  async saveAddress({id, data, token}) {
    const result = await RequestUtils.doRequest({
      method: 'post',
      route: `${this.routePath}/${id}/addresses`,
      data: JSON.stringify(data),
      headers: { 
        'Content-type': 'application/json', 
        'Accept': 'application/json', 
        'Authorization': `Bearer ${token}`
      },
    })

    return result
  }

  async savePhone({id, data, token}) {
    const result = await RequestUtils.doRequest({
      method: 'post',
      route: `${this.routePath}/${id}/phones`,
      data: JSON.stringify(data),
      headers: { 
        'Content-type': 'application/json', 
        'Accept': 'application/json', 
        'Authorization': `Bearer ${token}`
      },
    })

    return result
  }

  async listStores({ token }) {
    const result = await RequestUtils.doRequest({
      method: 'get',
      route: `${this.routePath}`,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    return result
  }

  async visualizeStore({ id, token }) {
    const result = await RequestUtils.doRequest({
      method: 'get',
      route: `${this.routePath}/${id}`,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    return result
  }
}

module.exports = new Store();
