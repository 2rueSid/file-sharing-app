import React from 'react';
import Cookies from 'universal-cookie';
import withNetworking from '@hocs/withNetworking';
import HeaderInfoView from './headerInfoView';

class HeaderInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      usedMemory: '',
      valueNow: 0,
      currentUser: null,
    };
  }

  async getUsedMemory() {
    const { httpClient } = this.props;
    let usedMemory = null;
    await httpClient
      .get('/dashboard/usedMemory')
      .then((res) => {
        usedMemory = res.data.usedMemory;
      })
      .catch((e) => {
        console.log(e.message);
      });
    return usedMemory;
  }

  async getCurrentUser() {
    const { httpClient } = this.props;
    const cookies = new Cookies();
    const token = cookies.get('token');
    await httpClient
      .post('/user', { token })
      .then((res) => {
        const user = res.data.user;
        this.setState({ ...this.state, currentUser: user });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  typeToRender(total) {
    let inWhatTypeDataShouldRender = null;

    switch (true) {
      case total <= 1024: {
        inWhatTypeDataShouldRender = `${total} bytes`;
        break;
      }
      case total >= 1024 && total <= 1000000: {
        inWhatTypeDataShouldRender = `${(total / 1024).toFixed(2)} KB`;
        break;
      }
      case total >= 1000000 && total <= 1000000000: {
        inWhatTypeDataShouldRender = `${(total / 1000000).toFixed(2)} MB`;
        break;
      }
      case total > 1000000000: {
        inWhatTypeDataShouldRender = `${(total / 1000000000).toFixed(2)} GB`;
        break;
      }
      default: {
        inWhatTypeDataShouldRender = `0 bytes`;
        break;
      }
    }
    this.setState({
      usedMemory: inWhatTypeDataShouldRender,
      valueNow: (total / 1000000000).toFixed(9),
    });
  }

  async componentDidMount() {
    await this.getCurrentUser();

    const memorySum = await this.getUsedMemory();
    this.typeToRender(memorySum);
  }

  render() {
    const { usedMemory, valueNow } = this.state;
    return (
      <HeaderInfoView
        usedMemory={usedMemory}
        valueNow={valueNow}
        currentUser={this.state.currentUser}
      />
    );
  }
}

export default withNetworking(HeaderInfo);
