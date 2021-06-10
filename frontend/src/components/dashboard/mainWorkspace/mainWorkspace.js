import React from 'react';
import Header from '../WorkspaceHeader/workspaceHeader';
import WorkspaceBody from '../Workspace/workspace';
import './mainWorkspace.css';

function MainWorkspace(props) {
  const { getFile, match, history, searchedResult } = props;
  const { push } = history;
  const { params } = match;

  return (
    <div className='dashboard-main'>
      <Header params={params} />
      <WorkspaceBody
        getFile={getFile}
        push={push}
        params={params}
        searchedResult={searchedResult}
      />
    </div>
  );
}

export default MainWorkspace;
