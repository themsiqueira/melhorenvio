class Store {
  routePath = 'api/v2/me/companies'

  async signup() {
    const result = await RequestUtils.doPost({
      route: `${this.routePath}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return result
  }

  async saveAddress({id, data, token}) {
    const result = await RequestUtils.doPost({
      route: `${this.routePath}/${id}/addresses`,
      data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return result
  }

  async savePhone({id, data, token}) {
    const result = await RequestUtils.doPost({
      route: `${this.routePath}/${id}/phones`,
      data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return result
  }

  async sendImage({id, data, token}) {
    const form = new FormData();
    form.append('file', data);

    const result = await RequestUtils.doPostWithFormData({
      route: `${this.routePath}/${id}/picture`,
      form,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return result
  }

  async listStores(token) {
    const result = await RequestUtils.doGet({
      route: `${this.routePath}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return result
  }

  async visualizeStore({id, token}) {
    const result = await RequestUtils.doGet({
      route: `${this.routePath}/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return result
  }
}

module.exports = new Store();
