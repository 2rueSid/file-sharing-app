import React from 'react';
import GetEmailView from './GetEmailView';
import withNetworking from '@hocs/withNetworking';

class GetEmail extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      email: '',
    };
  }

  sendResetEmail = async email => {
    const { httpClient } = this.props;
    let message = null;

    await httpClient
      .post(`/auth/reset-password/send-mail`, { email })
      .then(res => {
        if (res.status) {
          message = res.data.message;
          this.setState({ message: message, email: '' });
        }
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email } = this.state;
    await this.sendResetEmail(email);
  };

  render() {
    const { message } = this.state;
    return (
      <GetEmailView
        resMessaage={message}
        handleSubmit={this.handleSubmit}
        handleChangeEmail={this.handleChangeEmail}
      />
    );
  }
}

export default withNetworking(GetEmail);
