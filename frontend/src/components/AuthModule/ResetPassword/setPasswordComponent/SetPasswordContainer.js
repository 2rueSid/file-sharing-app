import React from 'react';
import SetPasswordView from './SetPasswordView';
import withNetworking from '@hocs/withNetworking';

class SetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      password: '',
    };
  }

  resetUserPassword = async (newPassword, token) => {
    const { httpClient } = this.props;
    let message = null;

    await httpClient
      .post(`/auth/reset-password/reset`, { token, newPassword })
      .then(res => {
        if (res.status) {
          message = res.data.message;
          this.setState({ message: message, password: '' });
        }
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const { params } = this.props.match;
    const { password } = this.state;
    const token = params.token;
    await this.resetUserPassword(password, token);

    this.setState({ password: '' });
  };
  render() {
    const { message } = this.state;

    return (
      <SetPasswordView
        resMessaage={message}
        handleSubmit={this.handleSubmit}
        handleChangePassword={this.handleChangePassword}
      />
    );
  }
}

export default withNetworking(SetPassword);
