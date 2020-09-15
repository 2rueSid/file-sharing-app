import React from 'react';
import { Input, Button } from '@material-ui/core';

function GetEmailView(props) {
  const { resMessaage, handleChangeEmail, handleSubmit } = props;

  return (
    <div className="auth-main">
      <div className="form-box">
        <form onSubmit={handleSubmit} className="reset-password-form">
          <Input
            id="reset-password-input"
            required
            type="email"
            placeholder="Email"
            onChange={handleChangeEmail}
          />
          <Button
            type="submit"
            class="btn btn-primary submit-btn"
            color="primary"
            children="Send a reset link"
          />
          <div className="reset-form-message">{resMessaage}</div>
        </form>
      </div>
    </div>
  );
}

export default GetEmailView;
