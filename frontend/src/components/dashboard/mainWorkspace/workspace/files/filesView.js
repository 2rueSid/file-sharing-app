import React from 'react';
import { Icon } from '@material-ui/core';
import './files.css';

const getFileIcon = extension => {
  let icn = '';
  const variations = {
    code: ['.js', '.cpp', '.html', '.css', '.ts'],
    documnets: ['.docx', '.doc'],
    photo: ['.jpg', '.jpeg', '.png'],
  };

  const checkIcon = array => array.find(v => v === extension);

  if (checkIcon(variations.code)) icn = '-code';
  if (checkIcon(variations.documnets)) icn = '-word';
  if (checkIcon(variations.photo)) icn = '-image';
  if (extension === '.pdf') icn = '-pdf';

  return icn;
};

function Files(props) {
  const { getFile, files, deleteFile, message } = props;

  const getFiles = () => {
    return files.map(v => {
      return (
        <div key={v.id} className="file-element" onClick={() => getFile(v)}>
          <Icon id="file-delete" onClick={() => deleteFile(v.id)}>
            <i className="far fa-times-circle"></i>
          </Icon>
          <Icon id={'file-icon'}>
            <i className={`far fa-file${getFileIcon(v.file_extension)}`}></i>
          </Icon>
          <span className="file-title">{v.file_name}</span>
        </div>
      );
    });
  };

  return (
    <div className="main-files">
      <p>
        FILES <span className="delete-message">{message}</span>
      </p>
      <div className="main-folder-files">{getFiles()}</div>
    </div>
  );
}

export default Files;
