import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
// import { fromLong } from "ip";
// import Navbar from "../../components/Navbar";
// import API from "../../utils/API";
// import { Container, Col, Row } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";


class Login extends Component {
  state = {
    user: null,
    username: '',
    password: ''
  };

  componentDidMount = () => {
    this.getUser();
    // this.handleTrends();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleTrends = async () => {
    // try{
    //   await api.getTrend()
    //     .then(res => {
    //         console.log(res.data);
    //         this.setState({ 
    //             trends: res.data
    //         });
    //   })
    // } catch (err) {
    //   console.log(err)
    // }
};

  getUser = async () => {
    // try {
    //   const user = await api.getUser();
    //   this.setState({ user });
    // } catch (err) {
    //   console.log('Error in App');
    // }
  };

  signup = async () => {
    // await api.signup(this.state.username, this.state.password);
    this.getUser();
  };

  login = async () => {
    try {
      // await api.login(this.state.username, this.state.password);
      this.getUser();
    } catch (err) {
      console.error(err);
    }
  };

  logout = async () => {
    // await api.logout();
    this.setState({ user: null });
  };

  render() {
    const { user, username, password } = this.state;

    return (
      <div className="App">
        <Jumbotron
          message="Who Says Mingling Is Hard?"
        />
        <form>
          {!user && (
            <div>
              <label htmlFor="username">Username or Email</label>
              <Input
                onChange={this.handleChange}
                id="username"
                name="username"
                value={username}
              />
              <br />
              <label htmlFor="password">Password</label>
              <Input
                onChange={this.handleChange}
                id="password"
                name="password"
                value={password}
              />
              <br />
              <div className="formBtns">
                <FormBtn onClick={this.login}>Submit</FormBtn>
                <FormBtn onClick={this.signup}>Sign Up</FormBtn>
                <p>Forgot Password</p>
              </div>
            </div>
          )}
          {user && (
            <div>
              <p>Hello {user._id}</p>
              <button onClick={this.logout}>Logout</button>
            </div>
          )}
        </form>
      </div>
    );
  }
};

export default Login;