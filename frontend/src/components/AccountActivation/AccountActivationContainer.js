import React from 'react';
import ActivateAccountView from './AccountActivationView';
import withNetworking from '@hocs/withNetworking';

class ActivateAccount extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
  }
  activateAccount = async token => {
    const { httpClient } = this.props;
    let message = null;

    await httpClient
      .get(`/auth/activate/${token}`)
      .then(res => {
        if (res.status) {
          message = res.data.message;
          this.setState({ message: message });
        }
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const hrefParam = params.token;

    await this.activateAccount(hrefParam);
  }

  render() {
    const { message } = this.state;
    return <ActivateAccountView resMessaage={message} />;
  }
}

export default withNetworking(ActivateAccount);
