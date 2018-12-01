import { Constants } from 'expo';
import React from 'react';

const { manifest } = Constants;

const _axios = require('axios');

let axios = _axios;

const apiHost =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? 'http://' +
      manifest.debuggerHost
        .split(`:`)
        .shift()
        .concat(`:8080`)
    : `api.example.com`;

export default class api extends React.Component {
  config(baseURL) {
    axios = _axios.create({
      baseURL
    });
  }

  componentDidMount = () => this.config(apiHost);

  async getUser() {
    try {
      const response = await axios.get('/auth/user');
      return response.data.user;
    } catch (err) {
      console.log(err);
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
