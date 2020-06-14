import axios from 'axios';

export async function doPost(url, data) {
  const result = await axios
    .post(url, data, {
      headers: {
        contentType: 'application/json',
      },
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });

  return result;
}

export async function doGet(url, headers = null) {
  const result = await axios
    .get(url, headers)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });

  return result;
}

export async function doDel(url, data = null, header = null) {
  const result = await axios
    .delete(url, data, header)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });

  return result;
}
