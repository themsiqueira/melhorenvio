import { Send } from 'melhor-envio-js'
import { AuthServices, SendServices } from '../services'
import AuthUtils from '../utils/authUtils'
import { auth } from '../../config'
import { Logger } from '../../infrastructure'
import { successCallbackResponse, errorCallbackResponse } from '../common'

const sendServices = new SendServices(Send);

class SendController { 
  async calculateProduct(req, res) {
    const {
      client_id,
      client_secret
    } = auth
    
    const { 
      from,
      to,
      products,
      services,
      options
    } = req.body

    await Promise.resolve(sendServices.calculateProduct({
      from,
      to,
      products,
      options,
      services,
      clienttId: client_id, 
      clientSecret: client_secret,
      AuthUtils,
      AuthServices
    }))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger)) 
  }

  async insertFreights(req, res) {
    const {
      service,
      agency,
      from,
      to,
      products,
      volumes,
      options
     } = req.body

    await Promise.resolve(sendServices.insertFreights({
      service,
      agency,
      from,
      to,
      products,
      volumes,
      options,
      AuthUtils,
      AuthServices
    }))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger)) 
  }

  async listCart(req, res) {
    await Promise.resolve(sendServices.listCart({
      AuthUtils
    }))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger)) 
  }

  async calculatePackage(req, res) {
    const {
      client_id,
      client_secret
    } = auth

    const { 
      from,
      to,
      pack,
      options,
      services
    } = req.body
    
    await Promise.resolve(sendServices.calculatePackage({
      from,
      to,
      package: pack,
      options,
      services,
      clienttId: client_id, 
      clientSecret: client_secret,
      AuthUtils,
      AuthServices
    }))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger)) 
  }

  async checkout(req, res) {
    const {
      orders
     } = req.body;
     
    await Promise.resolve(sendServices.checkout({
      orders,
      AuthUtils,
      AuthServices,
    }))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger)) 
  }

  async previewTags(req, res) {
    const {
      orders
     } = req.body;
     
    await Promise.resolve(sendServices.previewTags({
      orders,
      AuthUtils,
    }))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger)) 
  }

  async generateTags(req, res) {
    const {
      orders
     } = req.body;
     
    await Promise.resolve(sendServices.generateTags({
      orders,
      AuthUtils,
    }))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger)) 
  }

  async printTags(req, res) {
    const {
      orders
     } = req.body;
     
    await Promise.resolve(sendServices.printTags({
      orders,
      AuthUtils,
    }))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger)) 
  }

  async cacellable(req, res) {
    const {
      orders
     } = req.body;
     
    await Promise.resolve(sendServices.cacellable({
      orders,
      AuthUtils,
    }))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger)) 
  }

  async cancelTag(req, res) {
    const {
      id, 
      description
     } = req.body;
     
    await Promise.resolve(sendServices.cancelTag({
      id, 
      description
    }))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger)) 
  }
  
  async trackingTag(req, res) {
    const {
      orders
     } = req.body;
     
    await Promise.resolve(sendServices.trackingTag({
      orders,
      AuthUtils,
    }))
    .then(successCallbackResponse(res))
    .catch(errorCallbackResponse(res, Logger)) 
  }
}

export default new SendController()
