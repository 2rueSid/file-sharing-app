import React, { useEffect, useState } from 'react';
import { Icon } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';

import './folder.css';

function Folders(props) {
  const { folders, deleteFolder, onFolderClick, message } = props;

  const [isDaughterFolder, setIsDaughterFolder] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname.includes('folder')) {
      setIsDaughterFolder(true);
    } else {
      setIsDaughterFolder(false);
    }
  }, [history]);

  const getFolders = () => {
    return folders.map((v) => {
      return (
        <div
          key={v.id}
          className='main-folders-element'
          onClick={() => onFolderClick(v.id)}
        >
          <Icon id='folder-delete' onClick={() => deleteFolder(v.id)}>
            <i className='far fa-times-circle del'></i>
          </Icon>
          <Icon className='folder-icon' style={{ fontSize: 30 }}>
            <i className='fas fa-folder'></i>
          </Icon>
          <span className='folder-title'>{v.directory_name}</span>
        </div>
      );
    });
  };

  return (
    <div className='main-folders'>
      <p className='workspace-header-title'>
        FOLDERS <span className='delete-message'>{message}</span>
        {isDaughterFolder && (
          <Icon>
            <span
              class='material-icons-outlined back-icon-folders'
              onClick={() => {
                history.push('/dashboard');
              }}
            >
              arrow_back
            </span>
          </Icon>
        )}
      </p>
      <div className='main-folders-elements'>{getFolders()}</div>
    </div>
  );
}

export default Folders;
