import React from 'react';
import FileDetails from './fileDetails/fileDetailsContainer';
import FileSettings from './settings/SettingsContainer';
import './rightMenu.css';
function RightMenu(props) {
  const { setFileInfo } = props;
  return (
    <div className="dashboard-right-side__menu">
      <FileDetails fileDetails={setFileInfo} />
      <FileSettings fileDetails={setFileInfo} />
    </div>
  );
}

export default RightMenu;
