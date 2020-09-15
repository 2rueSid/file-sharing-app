import React from 'react';
import CreateFileBtn from './createFileBtn';
import CreateFolderBrn from './createFoldersBtn';
import './headerTitle.css';

function HeaderTitle(props) {
  const { onChangeHandler, onSubmit, onInputChangeHandler } = props;

  return (
    <div className="header-title">
      <h2>Documents</h2>
      <CreateFolderBrn onSubmit={onSubmit} onInputChangeHandler={onInputChangeHandler} />
      <CreateFileBtn onChangeHandler={onChangeHandler} />
    </div>
  );
}

export default HeaderTitle;
