import React from 'react';
import FolderView from './FolderView';
import withNetworking from '@hocs/withNetworking';

class Folders extends React.Component {
  constructor() {
    super();
    this.state = {
      folders: [],
      message: '',
    };
  }

  getFoldersFromAPI = async id => {
    const { httpClient, push } = this.props;

    let folders = [];
    await httpClient
      .get(`dashboard/folder/${id}`)
      .then(res => {
        folders = res.data.directory;
        this.setState({ folders: folders });
        if (id !== null) {
          let url = '/dashboard';
          if (id !== null) {
            url += `/folder/${id}`;
          }
          push(url, this.state);
        }
      })
      .catch(e => {
        console.log(e.message);
      });

    return folders;
  };

  async componentDidMount() {
    const { params } = this.props;
    const hrefParam = params.folder_id;

    if (!hrefParam) {
      await this.getFoldersFromAPI(null);
    } else {
      await this.getFoldersFromAPI(hrefParam);
    }
  }

  onFolderClick = async id => {
    await this.getFoldersFromAPI(id);
  };

  async deleteFolderInDb(id) {
    const { httpClient } = this.props;
    await httpClient
      .delete('dashboard/folder', { data: { directoryId: id } })
      .then(res => {
        if (res.status === 200) {
          this.setState({ message: res.data.message });
        }
      })
      .catch(e => {
        console.log(e.message);
      });
  }

  deleteFolder = async id => {
    if (window.confirm('are you sure want to delete a folder?')) {
      await this.deleteFolderInDb(id);
    }
    return true;
  };

  render() {
    const { folders, message } = this.state;

    return (
      <FolderView
        deleteFolder={this.deleteFolder}
        folders={folders ? folders : []}
        onFolderClick={this.onFolderClick}
        message={message}
      />
    );
  }
}

export default withNetworking(Folders);
