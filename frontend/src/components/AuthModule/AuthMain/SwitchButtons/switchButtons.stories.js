import React from 'react';
import SwitchButtonsView from './SwitchButtonsView';
export default { title: 'authorization switch buttons' };

export const loginButtonActive = () => {
  return (
    <SwitchButtonsView
      logBtnClick={() => 'login button clicked'}
      regBtnClick={() => 'register button click'}
      buttonClicked={'login'}
    />
  );
};

export const registerButtonActive = () => {
  return (
    <SwitchButtonsView
      logBtnClick={() => 'login button clicked'}
      regBtnClick={() => 'register button click'}
      buttonClicked={'register'}
    />
  );
};
