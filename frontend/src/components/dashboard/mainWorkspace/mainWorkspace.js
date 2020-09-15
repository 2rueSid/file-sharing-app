import React from 'react';
import Header from './workspaceHeader/workspaceHeader';
import WorkspaceBody from './workspace/workspace';
import './mainWorkspace.css';

function MainWorkspace(props) {
  const { getFile, match, history, searchedResult } = props;
  const { push } = history;
  const { params } = match;

  return (
    <div className="dashboard-main">
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
