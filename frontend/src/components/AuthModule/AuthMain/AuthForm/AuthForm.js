import React from 'react';
import Login from './Login/LoginContainer';
import Register from './Register/RegisterContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './AuthForm.css';
function AuthForm() {
  return (
    <div className="auth-form">
      <Router>
        <Switch>
          <Route path="/auth/login">
            <Login />
          </Route>
          <Route path="/auth/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default AuthForm;
