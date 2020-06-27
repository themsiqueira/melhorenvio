import { AuthController } from '../app/controllers';

module.exports = app => {
  app.get('/auth', AuthController.authorization);

  app.get('/', AuthController.callbackToken);
};
