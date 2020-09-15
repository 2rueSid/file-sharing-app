import React from 'react';
import RegisterView from './RegsiterView';
import withNetworking from '@hocs/withNetworking';
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      message: '',
    };
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  handleChangePasswordConfirm = event => {
    this.setState({ passwordConfirm: event.target.value });
  };

  postRequest = user => {
    const { httpClient } = this.props;
    const url = `auth/register`;
    httpClient
      .post(url, { user })
      .then(res => {
        if (res.status === 200) {
          window.location.href = '/auth/login';
        }
      })
      .catch(e => {
        if (e) {
          this.setState({
            message: 'Email is already taken',
          });
        }
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { passwordConfirm, message, ...user } = this.state;
    this.postRequest(user);
    this.setState({
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    });
  };

  render() {
    return (
      <RegisterView
        handleSubmit={this.handleSubmit}
        handleChangeEmail={this.handleChangeEmail}
        handleChangeName={this.handleChangeName}
        handleChangePassword={this.handleChangePassword}
        handleChangePasswordConfirm={this.handleChangePasswordConfirm}
        inputData={this.state}
      />
    );
  }
}

export default withNetworking(Register);
