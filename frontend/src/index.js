import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Favicon from 'react-favicon';

import PrivateRoute from './components/PrivateRoute';
import ContextProvider, { MainContext } from './indexContextProvider';
import useGetCurrentUser from './hooks/useGetCurrentUser';

import ActivateAccount from './components/AccountActivation/AccountActivationView';
import AuthComponent from './components/AuthModule/authComponent';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/LandingPage/LandingPage';
import ResetSetPassword from './components/ResetPassword/setPasswordComponent/SetPasswordContainer';
import ResetGetPassword from './components/ResetPassword/getEmailComponent/GetEmailContainer';

function MainProvider() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}

function App() {
  const { logined, setLogined, setCurrentUser } = useContext(MainContext);

  const user = useGetCurrentUser();

  useEffect(() => {
    if (user) {
      setLogined(true);
      setCurrentUser(user);

      localStorage.setItem('isLogined', 'true');
    } else {
      setLogined(false);
    }
  }, [user]);

  return (
    <Router>
      <Favicon url='/favicon.ico' />
      <div>
        <Switch>
          <Route path='/auth'>
            <AuthComponent />
          </Route>

          <PrivateRoute
            component={Dashboard}
            path='/dashboard'
            logined={logined && logined}
          />

          <Route
            path={'/activate/:token'}
            component={(props) => <ActivateAccount {...props} />}
          />
          <Route
            path={'/reset-password/email'}
            component={(props) => <ResetGetPassword {...props} />}
          />
          <Route
            path={'/reset-password/:token'}
            component={(props) => <ResetSetPassword {...props} />}
          />
          <Route path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<MainProvider />, document.getElementById('root'));
