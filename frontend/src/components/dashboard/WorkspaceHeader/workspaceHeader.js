import React from 'react';
import HeaderTitle from '../HeaderTitle/headerTitleContainer';
import './workspaceHeader.css';
function WorkspaceHeader(props) {
  const { params } = props;
  return (
    <div className='workspace-header'>
      <HeaderTitle params={params} />
    </div>
  );
}

export default WorkspaceHeader;
