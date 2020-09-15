import React from 'react';

import './AccountActivation.css';
function ActivateAccount(props) {
  const { resMessaage } = props;
  return (
    <div className="auth-main">
      <div className="form-box">
        <div className="activate-message">
          <p className="server-message">{resMessaage}</p>
          <a href="/auth/login" className="login-redirect">
            go to the login page
          </a>
        </div>
      </div>
    </div>
  );
}

export default ActivateAccount;
