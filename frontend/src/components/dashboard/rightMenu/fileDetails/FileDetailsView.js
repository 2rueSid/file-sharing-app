import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import './fileDetails.css';
function FileDetails(props) {
  const { fileDetails } = props;
  const getFileDetails = () => {
    if (Object.values(fileDetails).length) {
      return (
        <ExpansionPanelDetails id="expansion-menu-details">
          <div>File Name: {fileDetails.file_name}</div>
          <div>File Extension: {fileDetails.file_extension}</div>
          <div>Created at: {fileDetails.created_at}</div>
          <div>Updated at: {fileDetails.updated_at}</div>
        </ExpansionPanelDetails>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <div className="right-menu-details expansion-menu">
      <ExpansionPanel id="expansion-menu-content">
        <ExpansionPanelSummary
          id="expansion-header"
          expandIcon={<i className="fas fa-chevron-down expansion-icon"></i>}
        >
          FILE DETAILS
        </ExpansionPanelSummary>
        {getFileDetails()}
      </ExpansionPanel>
    </div>
  );
}

export default FileDetails;
