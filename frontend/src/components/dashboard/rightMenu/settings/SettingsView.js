import React from 'react';
import {
  Switch,
  Input,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import './settings.css';

function Settings(props) {
  const {
    isChecked,
    fileDetails,
    setCheck,
    onEmailShareChange,
    onShareFileClick,
    message,
    sharedEmail,
    shareLink,
  } = props;

  const getSharableLink = () => {
    if (isChecked) {
      return <div className="link">{shareLink}</div>;
    } else {
      return <div></div>;
    }
  };

  const getFileDetails = () => {
    if (Object.values(fileDetails).length) {
      return (
        <ExpansionPanelDetails id="expansion-menu-settings">
          <div className="sharable-link">
            <p>Sharable link</p>
            <Switch
              color="primary"
              onChange={event => setCheck(event.target.checked, fileDetails.id)}
            />
          </div>
          {getSharableLink()}
          <div className="share-with">
            <p>Share with people</p>
            <div className="share-form">
              <Input
                disableUnderline={true}
                id="share-with-input"
                placeholder="Email invitation"
                type="email"
                onChange={e => onEmailShareChange(e)}
                value={sharedEmail}
              />
              <div className=" share-with-icon">
                <i className="far fa-file"></i>
              </div>
              <div className=" share-expansion-icon">
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
            <div className="shared-message">{message}</div>
            <Button
              children={'send'}
              id="share-button"
              onClick={() => onShareFileClick(fileDetails.id)}
            />
          </div>
          <div className="shared-with">
            <p>Sared access</p>
            <div id="shared-with-list">
              <ul>
                <li id="shared-list-item">
                  <span>mekaa2.718@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </ExpansionPanelDetails>
      );
    } else {
      return (
        <div className="sharable-link">
          <p>Choose some file</p>
        </div>
      );
    }
  };

  return (
    <div className="rigfileDetails={this.props.setFileInfo}ht-menu-settings expansion-menu">
      <ExpansionPanel id="expansion-menu-content">
        <ExpansionPanelSummary
          id="expansion-header"
          expandIcon={<i className="fas fa-chevron-down expansion-icon"></i>}
        >
          SETTINGS
        </ExpansionPanelSummary>
        {getFileDetails()}
      </ExpansionPanel>
    </div>
  );
}

export default Settings;
