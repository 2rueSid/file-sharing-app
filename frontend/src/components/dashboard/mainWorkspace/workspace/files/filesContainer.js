import React from 'react';
import withNetworking from '@hocs/withNetworking';
import FilesView from './filesView';

class Files extends React.Component {
  constructor() {
    super();
    this.state = {
      files: [],
      message: '',
    };
  }

  getFilesFromAPI = async (folder_id = null) => {
    const { httpClient } = this.props;
    let files = [];
    await httpClient
      .get(`dashboard/files/${folder_id}`)
      .then(res => {
        files = res.data.files;
      })
      .catch(e => {
        console.log(e.message);
      });

    return files;
  };
  setSharedFile = async token => {
    const { httpClient } = this.props;

    await httpClient
      .get(`dashboard/share/with/${token}`)
      .then(res => {
        console.log(res.message);
        window.location.href = '/dashboard';
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  async componentDidMount() {
    if (!this.props.searchedResult || typeof this.props.searchedResult === 'string') {
      const folder_id = this.props.params.folder_id || null;
      const filesFromApi = await this.getFilesFromAPI(folder_id);
      this.setState({ files: filesFromApi, message: this.props.searchedResult });
    } else {
      const { searchedResult } = this.props;
      this.setState({ files: searchedResult });
    }

    if (this.props.params.share_token) {
      const { share_token } = this.props.params;
      await this.setSharedFile(share_token);
    }
  }

  async deleteFileInDb(id) {
    const { httpClient } = this.props;
    await httpClient
      .delete('dashboard/file', { data: { fileId: id } })
      .then(res => {
        if (res.status === 200) {
          this.setState({ message: res.data.message });
        }
      })
      .catch(e => {
        console.log(e.message);
      });
  }

  deleteFile = async id => {
    if (window.confirm('are you sure want to delete this file?')) {
      await this.deleteFileInDb(id);
    }
    return true;
  };

  render() {
    const { getFile } = this.props;
    const { files, message } = this.state;

    return (
      <FilesView
        getFile={getFile}
        message={message}
        files={files ? files : []}
        deleteFile={this.deleteFile}
      />
    );
  }
}

export default withNetworking(Files);
