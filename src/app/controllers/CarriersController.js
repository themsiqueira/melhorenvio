import { Carriers } from 'melhor-envio-js'
import { CarriersServices } from '../services'
import { Logger } from '../../infrastructure'
import { successCallbackResponse, errorCallbackResponse } from '../common'

const carriersServices = new CarriersServices(Carriers)

class CarriersController {
  async listCarriers(req, res) {
    await Promise.resolve(carriersServices.listCarriers())
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger))
  }

  async listCarrierInformation(req, res) {
    const { id } = req.param
    await Promise.resolve(carriersServices.listCarrierInformation(id))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger))
  }

  async listServices(req, res) {
    await Promise.resolve(carriersServices.listServices())
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger))
  }

  async listServiceInformation(req, res) {
    const { id } = req.param
    await Promise.resolve(carriersServices.listServiceInformation(id))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger))
  }

  async listAgencies(req, res) {
    await Promise.resolve(carriersServices.listAgencies())
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger))
  }

  async listAgencyInformation(req, res) {
    const { id } = req.param
    await Promise.resolve(carriersServices.listAgencyInformation(id))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger))
  }

  async listFilterAgency(req, res) {
    await Promise.resolve(carriersServices.listFilterAgency(req.query))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger))
  }
}

export default new CarriersController()
