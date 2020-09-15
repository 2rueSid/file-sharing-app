import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import SwitchButtons from '../SwitchButtons/SwitchButtonsContainer';
import './FormBox.css';
function FormBoxView() {
  return (
    <div className="auth-main">
      <div className="form-box">
        <SwitchButtons />
        <AuthForm />
      </div>
    </div>
  );
}

export default FormBoxView;
