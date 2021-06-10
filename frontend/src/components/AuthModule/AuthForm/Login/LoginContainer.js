import React from 'react';
import LoginView from './LoginView';
import withNetworking from '@hocs/withNetworking';
import Cookies from 'universal-cookie';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      message: '',
    };
  }

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  loginPostRequest = user => {
    const cookies = new Cookies();
    const { httpClient } = this.props;
    const url = `auth/login`;

    if (cookies.get('token') !== undefined) {
      cookies.remove('token');
    }

    httpClient
      .post(url, user)
      .then(res => {
        if (res.status === 200) {
          const { token } = res.data;
          cookies.set('token', token, { path: '/', sameSite: true });
          window.location.href = '/dashboard';
        }
      })
      .catch(e => {
        if (e) {
          this.setState({ message: 'bad credentials' });
        }
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    this.loginPostRequest(user);
    this.setState({
      email: '',
      password: '',
    });
  };
  render() {
    return (
      <LoginView
        handleSubmit={this.handleSubmit}
        handleChangeEmail={this.handleChangeEmail}
        handleChangePassword={this.handleChangePassword}
        inputData={this.state}
      />
    );
  }
}

export default withNetworking(Login);
