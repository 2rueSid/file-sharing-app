import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Icon } from '@material-ui/core';
import AuthFormBox from './AuthMain/FormBox/FormBoxView';
import ActivateAccount from './AccountActivation/AccountActivationContainer';
import ResetGetEmail from './ResetPassword/getEmailComponent/GetEmailContainer';
import ResetSetPassword from './ResetPassword/setPasswordComponent/SetPasswordContainer';

import './authComponent.css';
function AuthComponent() {
  return (
    <div className="auth-component">
      <div className="auth-side">
        <Icon className="icon" fontSize={'large'}>
          <i className="fas fa-seedling"></i>
        </Icon>
      </div>
      <Router>
        <Switch>
          <Route
            path={'/auth/activate/:token'}
            component={props => <ActivateAccount {...props} />}
          />
          <Route
            path={'/auth/reset-password/email'}
            component={props => <ResetGetEmail {...props} />}
          />
          <Route
            path={'/auth/reset-password/:token'}
            component={props => <ResetSetPassword {...props} />}
          />
          <AuthFormBox />
        </Switch>
      </Router>
    </div>
  );
}

export default AuthComponent;
