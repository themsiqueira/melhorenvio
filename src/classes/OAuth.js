const RequestRequestUtils = require('../utils/RequestRequestUtils');
const FormData = require('form-data');

class OAuth {
    async getToken(data){
        const route = '/oauth/token'
        const headers = {
            Accept: 'application/json'
        }
        const form = new FormData();
        form.append('grant_type', 'authorization_code');
        form.append('client_id', data.clientId);
        form.append('client_secret', data.clientSecret);
        form.append('redirect_uri', data.redirectUri);
        form.append('code', '');

        const result = await RequestRequestUtils.doPostWithFormData({route, form, headers});
        return result;
    }

    async refreshToken(data){
        const route = '/oauth/token'
        const headers = {
            Accept: 'application/json'
        }
        const form = new FormData();
        form.append('grant_type', 'refresh_token');
        form.append('refresh_token', data.refreshToken);
        form.append('client_id', data.clientId);
        form.append('client_secret', data.clientSecret);

        const result = await RequestRequestUtils.doPostWithFormData({route, form, headers});
        return result;
    }

    async listAppInformation(token){
        const route = '/api/v2/me/shipment/app-settings'
        const headers = {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
        const result = await RequestRequestUtils.doGet({route, headers});
        return result;
    }
}

module.exports = new OAuth();
