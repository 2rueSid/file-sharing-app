import { Button } from '@material-ui/core';
import React from 'react';
import FileDetails from '../FileDetails/fileDetailsContainer';
import FileSettings from '../MenuSettings/SettingsContainer';
import './rightMenu.css';
function RightMenu(props) {
  const { setFileInfo } = props;

  return (
    <div className='dashboard-right-side__menu'>
      <FileDetails fileDetails={setFileInfo} />
      <FileSettings fileDetails={setFileInfo} />
      {setFileInfo && !!Object.values(setFileInfo).length && (
        <div className='download-button-container'>
          <Button
            className='download-button'
            variant='outlined'
            color='primary'
            onClick={() => {
              window.open(`/uploads/${setFileInfo.file_dest_name}`, '_blank');
            }}
          >
            Download
          </Button>
        </div>
      )}
    </div>
  );
}

export default RightMenu;
