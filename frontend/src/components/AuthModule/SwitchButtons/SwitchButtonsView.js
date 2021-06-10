import React from 'react';
import './SwitchButtons.css';
import { Button } from '@material-ui/core';
function SwitchButtonsView(props) {
  const { logBtnClick, regBtnClick, buttonClicked } = props;
  return (
    <div className="button-box">
      <Button
        onClick={logBtnClick}
        class={`btn toggle-button ${buttonClicked === 'login' ? 'activeBtn' : ''} `}
        children="Sign In"
        href="/auth/login"
      />
      <Button
        onClick={regBtnClick}
        class={`btn toggle-button ${buttonClicked === 'register' ? 'activeBtn' : ''} `}
        children="Sign up"
        href="/auth/register"
      />
    </div>
  );
}

export default SwitchButtonsView;
