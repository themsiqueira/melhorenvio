class CarriersServices {
  constructor(Carriers) {
    this.Carriers = Carriers
  }

  async listCarriers() {
    await this.Carriers.listCarriers()
  }

  async listCarrierInformation({ id }) { 
    await this.Carriers.listCarrierInformation(id)
  }

  async listServices() { 
    await this.Carriers.listServices(id)
  }

  async listServiceInformation({ id }) {
    await this.Carriers.listServiceInformation(id)
  }

  async listAgencies() {
    await this.Carriers.listAgencies()
  }

  async listAgencyInformation({ id }) {
    await this.Carriers.listAgencyInformation(id)
  }

  async listFilterAgency({ params }) {
    await this.Carriers.listFilterAgency(params)
  }

}

export default CarriersServices
