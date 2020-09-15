import React from 'react';
import { Input, Button, Link } from '@material-ui/core';
import './Login.css';
function Login(props) {
  const { handleSubmit, handleChangeEmail, handleChangePassword, inputData } = props;

  return (
    <form onSubmit={handleSubmit} className="input-group login">
      <Input
        id="input-field"
        className={'input-field-spacing'}
        disableUnderline
        required
        type="email"
        placeholder="Email"
        onChange={handleChangeEmail}
        value={inputData.email}
      />
      <Input
        id="input-field"
        className={'input-field-spacing'}
        disableUnderline
        required
        type="password"
        placeholder="Password"
        onChange={handleChangePassword}
        value={inputData.password}
      />
      <Link
        children="Forgot password?"
        class="reset-link underlineHover"
        color="primary"
        href="/auth/reset-password/email"
      />

      <Button type="submit" class="btn btn-primary submit-btn" color="primary" children="Login" />
      <div className="event-message">{inputData.message}</div>
    </form>
  );
}

export default Login;
