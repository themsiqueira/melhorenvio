const RequestUtils = require('../utils/RequestUtils');
const FormData = require('form-data');
class Users {
  routePath = 'api/v2'

  async signup({data, token}) {
    const form = new FormData();

    form.append('firstname', data.firstName);
    form.append('lastname', data.lastName);
    form.append('document', data.document);
    form.append('birthdate', data.birthdate);
    form.append('email', data.email);
    form.append('password', data.password);
    form.append('phone_mobile', data.phone_mobile);
    form.append('phone_fixed', data.phone_fixed);
    form.append('company', data.company);
    form.append('coupon', data.coupon);
    form.append('terms', data.terms);
    form.append('address[label]', data.address.label);
    form.append('address[postal_code]', data.address.postal_code);
    form.append('address[address]', data.address.address);
    form.append('address[number]', data.address.number);
    form.append('address[complement]', data.address.complement);
    form.append('address[district]', data.address.district);
    form.append('address[city]', data.address.city);
    form.append('address[state_abbr]', data.address.state_abbr);
    form.append('address[country]', data.address.country);

    const result = await RequestUtils.doRequest({
      method: 'post',
      route: `${this.routePath}/register`,
      data: form,
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`,
        ...form.getHeaders()
      }
    });

    return result;
  }

  async listUserInformation({token}) {
    const result = await RequestUtils.doRequest({
      method: 'get',
      route: `${this.routePath}/me`,
      headers: {
        'Accept': 'application/json', 
        'Authorization': `Bearer ${token}`
      }
    });

    return result;
  }

  async listUserAddress({token}) {
    const result = await RequestUtils.doRequest({
      method: 'get',
      route: `${this.routePath}/me/addresses`,
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    return result
  }

  async userBalance({ token }) {
    const result = await RequestUtils.doRequest({
      method: 'get',
      route: `${this.routePath}/me/balance`,
      headers: {
        'Accept': 'application/json', 
        'Authorization': `Bearer ${token}`
      },
    });

    return result;
  }

  async insertBalanceWallet({ data, token }) {
    const result = await RequestUtils.doRequest({
      method: 'post',
      route: `${this.routePath}/me/balance`,
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`
      },
      data: JSON.stringify(data)
    });

    return result;
  }

  async listShipments({status, token}) {
    const result = await RequestUtils.doRequest({
      method: 'get',
      route: `${this.routePath}/me/orders?status=${status}`,
      headers: {
        'Accept': 'application/json', 
        'Authorization': `Bearer ${token}`
      }
    });

    return result;
  }
}
module.exports = new Users();
