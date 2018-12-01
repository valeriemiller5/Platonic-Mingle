import React, { Component } from 'react';
import api from './API';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    user: null,
    username: '',
    password: ''
  };

  componentDidMount = () => {
    this.getUser();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getUser = async () => {
    const user = await api.getUser();
    this.setState({ user });
  };

  signup = async () => {
    await api.signup(this.state.username, this.state.password);
    this.getUser();
  };

  login = async () => {
    try {
      await api.login(this.state.username, this.state.password);
      this.getUser();
    } catch (err) {
      console.error(err);
    }
  };

  logout = async () => {
    await api.logout();
    this.setState({ user: null });
  };

  render() {
    const { user, username, password } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {!user && (
          <div>
            <label htmlFor="username">Username:</label>
            <input
              onChange={this.handleChange}
              id="username"
              name="username"
              value={username}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              onChange={this.handleChange}
              id="password"
              name="password"
              value={password}
            />
            <br />
            <button onClick={this.login}>Login</button>
            <button onClick={this.signup}>Signup</button>
          </div>
        )}
        {user && (
          <div>
            <p>Hello {user._id}</p>
            <button onClick={this.logout}>Logout</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
