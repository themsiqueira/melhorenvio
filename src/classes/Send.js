const RequestRequestUtils = require('../utils/RequestRequestUtils');
const FormData = require('form-data');
class Send {
    async calcFreights(data, token){
        const route = '/api/v2/me/shipment/calculate';
        const headers = {
            Accept: 'application/json',
            ContentType: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        const result = await RequestRequestUtils.doPost({route, data, headers});
        return result;
    }

    async insertFreightsOnCart(data, token){
        const route = '/api/v2/me/cart';
        const headers = {
            Accept: 'application/json',
            ContentType: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        const result = await RequestRequestUtils.doPost({route, data, headers});
        return result;
    }

    async listCart(token){
        const route = '/api/v2/me/cart';
        const headers = {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        const result = await RequestRequestUtils.doGet({route, headers});
        return result;
    }

    async getItemCartInformation(itemId, token){
        const route = `/api/v2/me/cart/${itemId}`;
        const headers = {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        const result = await RequestRequestUtils.doGet({route, headers});
        return result;
    }

    async removeItemFromCart(itemId, token){
        const route = `/api/v2/me/cart/${itemId}`;
        const headers = {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        const result = await RequestRequestUtils.doGet({route, headers});
        return result;
    }

    async checkoutOrders(data, token){
        const route = `/api/v2/me/shipment/checkout`;
        const headers = {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        const result = await RequestRequestUtils.doPost({route, data, headers});
        return result;
    }

    async shipmentPreview(data, token){
        const route = `/api/v2/me/shipment/preview`;
        const headers = {
            Accept: 'application/json',
            ContentType: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        const result = await RequestRequestUtils.doPost({route, data, headers});
        return result;
    }

    async shipmentPreview(data, token){
        const route = `/api/v2/me/shipment/preview`;
        const headers = {
            Accept: 'application/json',
            ContentType: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        const result = await RequestRequestUtils.doPost({route, data, headers});
        return result;
    }

    async shipmentGenerate(token){
        const route = `/api/v2/me/shipment/generate`;
        const headers = {
            Accept: 'application/json',
            ContentType: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        const result = await RequestRequestUtils.doPost({route, data, headers});
        return result;
    }

    async shipmentPrint(token){
        const route = `/api/v2/me/shipment/generate`;
        const headers = {
            Accept: 'application/json',
            ContentType: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        const result = await RequestRequestUtils.doPost({route, data, headers});
        return result;
    }

    async searchOrders(token){
        const route = `/api/v2/me/orders/search`;
        const headers = {
            Accept: 'application/json',
            ContentType: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        const result = await RequestRequestUtils.doGet({route, query, headers});
        return result;
    }

    async cancelShipment({token, data}){
        const route = `/api/v2/me/shipment/cancel`;
        const headers = {
            Accept: 'application/json',
            ContentType: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        const result = await RequestRequestUtils.doPost({route, data, headers});
        return result;
    }

    async cancellableShipment({ data }){
        const route = `/api/v2/me/shipment/cancellable`;
        const headers = {
            Accept: 'application/json',
            ContentType: 'application/json',
        }
        const result = await RequestRequestUtils.doGet({route, data, headers});
        return result;
    }

    async shipmentTracking({ data, token }){
        const route = `/api/v2/me/shipment/tracking`;
        const headers = {
            Accept: 'application/json',
            ContentType: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        const result = await RequestRequestUtils.doPost({route, data, headers});
        return result;
    }
}

module.exports = new Send();
