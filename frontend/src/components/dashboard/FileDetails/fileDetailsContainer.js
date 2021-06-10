import React from 'react';
import FileDetailsView from './FileDetailsView';
function FileDetails(props) {
  const { fileDetails } = props;
  return <FileDetailsView fileDetails={fileDetails} />;
}

export default FileDetails;
