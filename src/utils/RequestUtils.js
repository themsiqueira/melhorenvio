const melhorEnvio = require('../config/axiosConfig');

class RequestUtils {
    async doPost({ route, data, headers }){
        const result = melhorEnvio.post(route, data, { headers })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
        });
        return result;
    }

    async doPostWithFormData({ route, form, headers }){
        const result = melhorEnvio.post(route, form, { headers })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
        });
        return result;
    }

    async doGet({ route, headers = null, data = null, query = null }) {
        const result = melhorEnvio.get(route, { data, query }, { headers })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
        });
        return result;
    }

    async doDelete({ route, headers = null, data = null, query = null }) {
        const result = melhorEnvio.delete(route, { data, query }, { headers })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
        });
        return result;
    }
}

module.exports = new RequestUtils();
