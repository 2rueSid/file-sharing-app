import React from 'react';
import Folders from './folders/FolderContainer';
import Files from './files/filesContainer';
function Workspace(props) {
  const { getFile, push, params, searchedResult } = props;

  return (
    <div className="workspace-main">
      <Folders push={push} params={params} />
      <Files getFile={getFile} push={push} params={params} searchedResult={searchedResult} />
    </div>
  );
}

export default Workspace;
