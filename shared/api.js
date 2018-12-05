const _axios = require('axios');

let axios = _axios;

class api {
  config(baseURL) {
    axios = _axios.create({
      baseURL
    });
  }

  async getTrend() {
    const response = await axios.get('/api/twitter');
    // console.log('api.js line 14: ', response.data); // this is working
    return response.data;
  }

  async getNews() {
    const response = await axios.get('/api/news');
    return response.data;
  }

  async getUser() {
    const response = await axios.get('/auth/user');
    return response.data.user;
  }

  async login(username, password) {
    const response = await axios.post('/auth/login', { username, password });
    return response.data.user;
  }

  async signup(username, password) {
    const response = await axios.post('/auth/signup', { username, password });
    console.log(response.data);
    return response.data.user;
  }

  async logout() {
    const response = await axios.post('/auth/logout');
    return response.data.user;
  }
}

module.exports = api;
