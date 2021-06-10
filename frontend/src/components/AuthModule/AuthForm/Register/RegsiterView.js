import React from 'react';
import { Input, Button } from '@material-ui/core';
import './Register.css';
function Register(props) {
  const {
    handleSubmit,
    handleChangeEmail,
    handleChangeName,
    handleChangePassword,
    handleChangePasswordConfirm,
    inputData,
  } = props;
  return (
    <form onSubmit={handleSubmit} className="input-group register">
      <Input
        id="input-field"
        className="input-field-spacing"
        disableUnderline
        required
        placeholder="Name"
        onChange={handleChangeName}
        value={inputData.name}
      />
      <Input
        id="input-field"
        className="input-field-spacing"
        disableUnderline
        required
        type="email"
        placeholder="Email"
        onChange={handleChangeEmail}
        value={inputData.email}
      />
      <Input
        id="input-field"
        className="input-field-spacing"
        disableUnderline
        required
        type="password"
        placeholder="Password"
        onChange={handleChangePassword}
        value={inputData.password}
      />
      <Input
        id="input-field"
        className={'input-field-spacing'}
        disableUnderline
        required
        type="password"
        placeholder="Password confirmation"
        onChange={handleChangePasswordConfirm}
        value={inputData.passwordConfirm}
      />
      <div className="event-message">{inputData.message}</div>
      <Button
        type="submit"
        class="btn btn-primary submit-btn"
        color="primary"
        children="Register"
      />
    </form>
  );
}

export default Register;
