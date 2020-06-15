import axios from 'axios';

const url = 'https://sandbox.melhorenvio.com.br';

export async function doPost(route, data, token) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
  const result = await axios
    .post(`${url}${route}`, { headers }, data)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });

  return result.data;
}

export async function doGet(route, token) {
  const headers = {
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  const result = await axios
    .get(`${url}${route}`, { headers })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });

  return result.data;
}

export async function doDel(route, data = null, header = null) {
  const result = await axios
    .delete(`${url}${route}`, data, header)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });

  return result.data;
}
