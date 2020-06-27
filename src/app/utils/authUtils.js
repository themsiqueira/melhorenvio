import isFuture from 'date-fns/isFuture'
import { OAuth } from 'melhor-envio-js'
import { auth, scope } from '../../config'
import AuthServicesFactory from '../services/AuthServices';
import ls from 'local-storage'

const AuthServices = new AuthServicesFactory(OAuth)

class AuthUtils {
  async getToken(){
    const {client_id, client_secret, redirect_uri } = auth;
    let token = ls.get('token');

    if(token) {
      if(!isFuture(token.expires_in)){
        const { token_type, access_token, refresh_token } = await AuthServices.refreshToken({ 
          clientId: client_id,
          clientSecret: client_secret,
          refreshToken: token.refresh_token,
          OAuth
        });
  
        const now = Date.now('YYYY-MM-DD')
        const expires_in = addDays(now, 30)
        ls.set('token', { token_type, access_token, refresh_token, expires_in })

        return access_token;
      } else { 
        return token.access_token;
      } 
    }

    await AuthServices.auth({
      client_id,
      redirect_uri,
      response_type: 'code',
      scope
    });

    token = ls.get('token');

    return token

  }

}

export default new AuthUtils();
