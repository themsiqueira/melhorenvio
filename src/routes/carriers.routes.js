import { CarriersController } from '../app/controllers/index';

module.exports = app => {
  app.get('/carriers/list', CarriersController.listCarriers);

  app.get('/carriers/list/information/:id', CarriersController.listCarrierInformation);

  app.get('/carriers/list/services', CarriersController.listServices);
  
  app.get('/carriers/list/service/information/:id', CarriersController.listServiceInformation);

  app.get('/carriers/list/agency', CarriersController.listAgencies);

  app.get('/carriers/list/agency/information/:id', CarriersController.listAgencyInformation);

  app.get('/carriers/list/agency/filter', CarriersController.listFilterAgency);

};
