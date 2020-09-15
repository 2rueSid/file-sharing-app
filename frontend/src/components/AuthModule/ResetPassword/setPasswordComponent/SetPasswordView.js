import React from 'react';
import { Input, Button } from '@material-ui/core';

function SetPassword(props) {
  const { resMessaage, handleSubmit, handleChangePassword } = props;

  return (
    <div className="auth-main">
      <div className="form-box">
        <form onSubmit={handleSubmit} className="reset-password-form">
          <Input
            id="reset-password-input"
            required
            type="password"
            placeholder="new password"
            onChange={handleChangePassword}
          />
          <Button
            type="submit"
            class="btn btn-primary submit-btn"
            color="primary"
            children="Reset password"
          />
          <div className="reset-form-message">{resMessaage}</div>
        </form>
      </div>
    </div>
  );
}

export default SetPassword;
