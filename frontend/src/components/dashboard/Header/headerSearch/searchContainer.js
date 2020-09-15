import React from 'react';
import withNetworking from '@hocs/withNetworking';
import SearchView from './searchView';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      result: null,
      searchedString: '',
    };
  }
  async getSearchedFiles() {
    const { httpClient } = this.props;
    const { searchedString } = this.state;
    let results = [];
    await httpClient
      .get(`dashboard/search/${searchedString}`)
      .then(res => {
        if (res.data.files) {
          results = res.data.files;
        }
      })
      .catch(e => {
        console.log(e.message);
      });
    return results;
  }

  onSearchFieldType = e => {
    this.setState({ searchedString: e.target.value });
  };

  onIconClick = async () => {
    const results = await this.getSearchedFiles();
    const { getSearchedResult } = this.props;

    if (!results.length) {
      this.setState({ result: [] });
    } else {
      this.setState({ result: results });
    }
    getSearchedResult(this.state.result);
  };

  render() {
    return <SearchView onSearchFieldType={this.onSearchFieldType} onIconClick={this.onIconClick} />;
  }
}

export default withNetworking(Search);
