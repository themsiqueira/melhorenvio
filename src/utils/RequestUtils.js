const axios = require('axios');

class RequestUtils {
    async doRequest({ route, method, headers = {}, data = {} }) {
        const config = {
            method,
            url: `https://melhorenvio.com.br/${route}`,
            headers,
            data
        };
        return axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
    }
}

module.exports = new RequestUtils();
