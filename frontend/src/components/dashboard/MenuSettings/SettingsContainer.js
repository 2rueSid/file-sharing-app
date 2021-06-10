import React from 'react';
import Settings from './SettingsView';
import WithNetworking from '@hocs/withNetworking';

import './settings.css';
class FileSettings extends React.Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
      sharedEmail: null,
      message: '',
      shareLink: '',
    };
  }

  setCheck = (checked, fileId) => {
    if (!checked) {
      this.setState({ isChecked: false });
    } else {
      this.generateSharableLink(fileId);
    }
  };
  onEmailShareChange = e => {
    this.setState({ sharedEmail: e.target.value });
  };

  generateSharableLink = async fileId => {
    const { httpClient } = this.props;

    await httpClient
      .get(`/dashboard/share/generate-link/${fileId}`)
      .then(res => {
        this.setState({ isChecked: true, shareLink: res.data.link });
      })
      .catch(e => {
        console.log(e);
      });
  };
  onShareFileClick = async fileId => {
    const { sharedEmail } = this.state;
    const { httpClient } = this.props;

    httpClient
      .post('/dashboard/share/email', { email: sharedEmail, fileId })
      .then(res => {
        this.setState({ sharedEmail: '', message: res.data.message });
      })
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    const { fileDetails } = this.props;

    const { isChecked, message, sharedEmail, shareLink } = this.state;
    return (
      <Settings
        fileDetails={fileDetails}
        isChecked={isChecked}
        setCheck={this.setCheck}
        onEmailShareChange={this.onEmailShareChange}
        onShareFileClick={this.onShareFileClick}
        message={message}
        sharedEmail={sharedEmail}
        shareLink={shareLink}
      />
    );
  }
}

export default WithNetworking(FileSettings);
