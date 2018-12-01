const _axios = require('axios');

let axios = _axios;

class api {
  config(baseURL) {
    axios = _axios.create({
      baseURL
    });
  }

  async getUser() {
    try {
      const response = await axios.get('/auth/user');
      return response.data.user;
    } catch (err) {
      console.log('error in API');
    }
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

export default api;
