const RequestUtils = require('../utils/RequestUtils');
const FormData = require('form-data');

class OAuth {
    async getAuthorization({ query }){
        const result = await RequestUtils.doRequest({
            method: 'get',
            route: `oauth/authorize?client_id=${query.clientId}&redirect_uri=${query.redirectUri}&response_type=${query.responseType}&state=teste&scope=${query.scope}`, 
        });
        return result;
    }

    async getToken({ data }){
        const form = new FormData();
        form.append('grant_type', 'authorization_code');
        form.append('client_id', data.clientId);
        form.append('client_secret', data.clientSecret);
        form.append('redirect_uri', data.redirectUri);
        form.append('code', data.code);

        const result = await RequestUtils.doRequest({
            method: 'post',
            route: 'oauth/token', 
            headers: {
                'Accept': 'application/json', 
                ...form.getHeaders() 
            },
            data: form
        });
        return result;
    }

    async refreshToken({ data }){
        const form = new FormData();
        form.append('grant_type', 'refresh_token');
        form.append('refresh_token', data.refreshToken);
        form.append('client_id', data.clientId);
        form.append('client_secret', data.clientSecret);

        const result = await RequestUtils.doRequest({
            method: 'post',
            route: 'oauth/token', 
            headers: {
                'Accept': 'application/json', 
                ...form.getHeaders() 
            },
            data: form
        });
        return result;
    }

    async listAppInformation({ token }){
        const result = await RequestUtils.doRequest({
            method: 'get',
            route: '/api/v2/me/shipment/app-settings', 
            headers: {
                'Accept': 'application/json', 
                'Authorization': `Bearer ${token}`
            },
        });
        return result;
    }
}

module.exports = new OAuth();
