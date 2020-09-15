import React from 'react';
import FileDetailsView from './FileDetailsView';
export default { title: 'File Details' };

export const FileDetails = () => {
  return <FileDetailsView fileDetails={{ title: 'document', extension: '.pdf' }} />;
};
