const RequestUtils = require('../utils/RequestUtils');

class Send {
    async calcFreights({ data, token }){
        const result = await RequestUtils.doRequest({
            method: 'post',
            route: 'api/v2/me/shipment/calculate', 
            data: JSON.stringify(data), 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        return result;
    }

    async insertFreightsOnCart({ data, token }){
        const result = await RequestUtils.doRequest({
            method: 'post',
            route: 'api/v2/me/cart', 
            data: JSON.stringify(data), 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        return result;
    }

    async listCart({ token }){
        const result = await RequestUtils.doRequest({
            method: 'get',
            route: '/api/v2/me/cart', 
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return result;
    }

    async getItemCartInformation({ itemId, token }){
        const result = await RequestUtils.doRequest({
            method: 'get',
            route: `api/v2/me/cart/${itemId}`, 
            headers: { 
                'Accept': 'application/json', 
                'Authorization': `Bearer ${token}`
            }
        });
        return result;
    }

    async removeItemFromCart({ itemId, token }){
        const result = await RequestUtils.doRequest({
            method: 'delete',
            route: `api/v2/me/cart/${itemId}`, 
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`
            }
        });
        return result;
    }

    async checkoutOrders({ data, token }){
        const result = await RequestUtils.doRequest({
            method: 'post',
            route: `api/v2/me/shipment/checkout`, 
            data: JSON.stringify(data), 
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`
            },
        });
        return result;
    }

    async shipmentPreview({ data, token }){
        const result = await RequestUtils.doRequest({
            method: 'post',
            route: `api/v2/me/shipment/preview`, 
            data: JSON.stringify(data), 
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`
            },
        });
        return result;
    }

    async shipmentGenerate({ data, token }){
        const result = await RequestUtils.doRequest({
            method: 'post',
            route: `api/v2/me/shipment/generate`, 
            data: JSON.stringify(data), 
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`
            },
        });
        return result;
    }

    async shipmentPrint({ data, token }){
        const result = await RequestUtils.doRequest({
            method: 'post',
            route: `api/v2/me/shipment/print`, 
            data: JSON.stringify(data), 
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`
            },
        });
        return result;
    }

    async searchOrders({ token, q = null }){
        const result = await RequestUtils.doRequest({
            method: 'get',
            route: `api/v2/me/orders/search?q=${q}`, 
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`
            },
        });
        return result;
    }

    async cancelShipment({ data, token }){
        const result = await RequestUtils.doRequest({
            method: 'post',
            route: `api/v2/me/shipment/cancel`, 
            data: JSON.stringify(data), 
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`
            },
        });
        return result;
    }

    async cancellableShipment({ data }){
        const result = await RequestUtils.doRequest({
            method: 'get',
            route: `api/v2/me/shipment/cancellable`, 
            data: JSON.stringify(data), 
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
        });
        return result;
    }


    async shipmentTracking({ data, token }){
        const result = await RequestUtils.doRequest({
            method: 'post',
            route: `api/v2/me/shipment/tracking`, 
            data: JSON.stringify(data), 
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`
            },
        });
        return result;
    }
}

module.exports = new Send();
