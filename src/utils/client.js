const axios = require('axios');
const { API } = require ('../config');

axios.default.timeout = 30000;

export class Client {
  constructor() {
      this.api = API;
  }

  async get(endpoint, params = null) {
    let response;
    if (params) {
      response = await axios.get(this.api + endpoint, { params: params });
    } else {
      response = await axios.get(this.api + endpoint);
    }


    if (!response || response.status !== 200) {
      return undefined;
    }

    return response.data;
  }
}