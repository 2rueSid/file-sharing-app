import React from 'react';
import { Icon } from '@material-ui/core';
import './folder.css';
function Folders(props) {
  const { folders, deleteFolder, onFolderClick, message } = props;

  const getFolders = () => {
    return folders.map(v => {
      return (
        <div key={v.id} className="main-folders-element">
          <Icon id="folder-delete" onClick={() => deleteFolder(v.id)}>
            <i className="far fa-times-circle del"></i>
          </Icon>
          <Icon
            className="folder-icon"
            style={{ fontSize: 30 }}
            onClick={() => onFolderClick(v.id)}
          >
            <i className="fas fa-folder"></i>
          </Icon>
          <span className="folder-title">{v.directory_name}</span>
        </div>
      );
    });
  };

  return (
    <div className="main-folders">
      <p>
        FOLDERS <span className="delete-message">{message}</span>
      </p>
      <div className="main-folders-elements">{getFolders()}</div>
    </div>
  );
}

export default Folders;
