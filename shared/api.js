import React, { Component } from 'react';
import axios from 'axios';

// let axios = _axios;

// class api {
//   config(baseURL) {
//     axios = _axios.create({
//       baseURL
//     });
//   }

class api extends Component {
  async getTrend() {
    const response = await axios.get('/api/twitter');
    // console.log('api.js line 14: ', response.data); // this is working
    return response.data;
  }

  async getNews() {
    const response = await axios.get('/api/news');
    return response.data;
  }

  async createFav(fav) {
    const response = await axios.post('/api/favs', fav);
    return response.data;
  }

  async getFav(user) {
    console.log('user is ' + user.user);
    const response = await axios.get('/api/favs');
    return response.data;
  }

  async getUser() {
    const response = await axios.get('/auth/user');
    return response.data.user;
  }

  async getProfile() {
    console.log('getting profile...');
    const response = await axios.get('/api/create_profile');
    console.log('getting profile...');
    console.log(response.data);
    return response.data;
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

  async setProfile(profile) {
    const response = await axios.post('/api/create_profile', { profile });
    console.log(response);
    return response.data;
  }

}

export default api;
