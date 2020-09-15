import React from 'react';
import ButtonBox from './header-button-box/buttonBox';
import HeaderTitle from './header-title/headerTitleContainer';
import './workspaceHeader.css';
function WorkspaceHeader(props) {
  const { params } = props;
  return (
    <div className="workspace-header">
      <HeaderTitle params={params} />
      <ButtonBox />
    </div>
  );
}

export default WorkspaceHeader;
