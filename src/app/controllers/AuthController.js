import { addDays } from 'date-fns/fp'
import { AuthServices } from '../services'
import { OAuth } from 'melhor-envio-js'
import { auth, scope } from '../../config'
import { Logger } from '../../infrastructure'
import { successCallbackResponse, errorCallbackResponse } from '../common'
import ls from 'local-storage'

const authServices = new AuthServices(OAuth)

class AuthController {

  async authorization(req, res) {
    const {
      client_id,
      redirect_uri,
    } = auth;

    await Promise.resolve(authServices.auth({
      clientId: client_id,
      redirectUri: redirect_uri,
      scope
    }))
    .then(successCallbackResponse(res)())
    .catch(errorCallbackResponse(res)(Logger))
  }
  
  async callbackToken(req, res) {    
    const {
      client_id,
      client_secret,
      redirect_uri,
    } = auth;
    
    const { code } = req.query;

    await Promise.resolve(authServices.tokenSolicitation({
      code, 
      clientId: client_id,
      clientSecret: client_secret,
      redirectUri: redirect_uri,
    }))
    .then(async ({ token_type, access_token, refresh_token })=> {
      const now = Date.now('YYYY-MM-DD')
      const expires_in = addDays(now, 30)
      ls.set('token', { token_type, access_token, refresh_token, expires_in })
    })
    .then(successCallbackResponse(res)())
    .catch(errorCallbackResponse(res)(Logger))
  }
}

export default new AuthController();
