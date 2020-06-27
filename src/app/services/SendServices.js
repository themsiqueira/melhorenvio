class SendServices {
  constructor(Send){
    this.Send = Send
  }
  async calculateProduct({
    from,
    to,
    products,
    options,
    services,
    clientId, 
    clientSecret,
    AuthUtils,
    AuthServices
  }) {
    await Promise.resolve(this.Send.calcFreights(
      {
        from,
        to,
        products,
        options,
        services
      }, AuthUtils.getToken())
    )
    .then(result => result)
    .catch(() => AuthServices.refreshToken({
      clientId,
      clientSecret,
      refreshToken: token
    }))
    
  }

  async calculatePackage({
    from,
    to,
    pack,
    options,
    services,
    clientId, 
    clientSecret,
    AuthUtils,
    AuthServices
  }) {
    await Promise.resolve(this.Send.calcFreights(
      {
        from,
        to,
        package: pack,
        options,
        services
      }, AuthUtils.getToken())
    )
    .then(result => result)
    .catch(() => AuthServices.refreshToken({
      clientId,
      clientSecret,
      refreshToken: token
    }))
    
  }

  async insertFreights({
    service,
    agency,
    from,
    to,
    products,
    volumes,
    options,
    AuthUtils,
    AuthServices
   }) {
    await Promise.resolve(this.Send.insertFreightsOnCart(
      {
        service,
        agency,
        from,
        to,
        products,
        volumes,
        options,
      }, AuthUtils.getToken())
    )
    .then(result => result)
    .catch(() => AuthServices.refreshToken({
      clientId,
      clientSecret,
      refreshToken: token
    }))
  }

  async listCart({
    AuthUtils
  }) {
    const token = AuthUtils.getToken()

    await Promise.resolve(this.Send.listCart(token))
    .then(result => result)
  }

  async checkout({
    orders,
    AuthUtils,
    AuthServices, 
   }) {
    const token = AuthUtils.getToken()
    await Promise.resolve(this.Send.checkoutOrders(
      {
        orders
      }, token)
    )
    .then(result => result)
    .catch(() => AuthServices.refreshToken({
      clientId,
      clientSecret,
      refreshToken: token
    }))
  }

  async previewTags({
    orders,
    AuthUtils,
   }) {
    await Promise.resolve(this.Send.shipmentPreview({ orders }, AuthUtils.getToken()))
    .then(result => result)
    .catch(err => err)
  }

  async cancellable({
    orders,
    AuthUtils,
   }) {
    await Promise.resolve(this.Send.cancellableShipment({ orders }, AuthUtils.getToken()))
    .then(result => result)
    .catch(err => err)
  }

  async printTags({
    orders
  }) {
    await Promise.resolve(this.Send.shipmentPrint({ orders, mode: 'public' }, AuthUtils.getToken()))
    .then(result => result)
    .catch(err => err)
  }

  async generateTags({
    orders,
    AuthUtils,
   }) {
    await Promise.resolve(this.Send.shipmentGenerate({ orders }, AuthUtils.getToken()))
    .then(result => result)
    .catch(err => err)
  }

  async cancelTag({
    id,
    description
  }) {
    await Promise.resolve(this.Send.cancelShipment(
      { id, description, reason_id: '2' }, AuthUtils.getToken()))
    .then(result => result)
    .catch(err => err)
  }

  async trackingTag({
    orders,
    AuthUtils,
   }) {
    await Promise.resolve(this.Send.shipmentGenerate({ orders }, AuthUtils.getToken()))
    .then(result => result)
    .catch(err => err)
  }
}

export default SendServices;
