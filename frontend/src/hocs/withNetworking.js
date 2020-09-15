import React from 'react';
import Axios from '../config/axios';

function WithNetworking(Component) {
  return class WithNetworking extends React.Component {
    httpClient = {
      post: async (url, data, config = {}) => {
        return await Axios.post(url, data, config);
      },
      get: async (url, config = {}) => {
        return await Axios.get(url, config);
      },
      put: async (url, data, config = {}) => {
        return await Axios.put(url, data, config);
      },
      delete: async (url, config = {}) => {
        return await Axios.delete(url, config);
      },
    };

    render() {
      return <Component httpClient={this.httpClient} {...this.props} />;
    }
  };
}

export default WithNetworking;
