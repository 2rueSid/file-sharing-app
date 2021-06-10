import React from 'react';
import HeaderTitleView from './headerTitleView';
import withNetworking from '@hocs/withNetworking';

class HeaderTitle extends React.Component {
  constructor() {
    super();
    this.state = {
      folderName: '',
    };
  }

  onChangeHandler = async (e) => {
    const data = new FormData();
    const { httpClient, params, history } = this.props;
    const folderId = params.folder_id;

    const url = '/dashboard/file';
    data.append('file', e.target.files[0]);
    data.append('folder_id', folderId);
    await httpClient
      .post(url, data)
      .then((res) => {
        window.location.replace('/dashboard');
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  onSubmit = async () => {
    const { folderName } = this.state;
    if (folderName !== '') {
      const { httpClient, params } = this.props;
      const url = '/dashboard/folder';
      const folderId = params.folder_id;

      const directory = {
        directory_name: folderName,
        father_directory: folderId,
      };

      await httpClient
        .post(url, { directory })
        .then((res) => {
          window.location.reload();
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  };

  onInputChangeHandler = (e) => {
    this.setState({ folderName: e.target.value });
  };

  render() {
    return (
      <HeaderTitleView
        onInputChangeHandler={this.onInputChangeHandler}
        onSubmit={this.onSubmit}
        onChangeHandler={this.onChangeHandler}
      />
    );
  }
}

export default withNetworking(HeaderTitle);
