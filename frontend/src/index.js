import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthComponent from './components/AuthModule/authComponent';
import Dashboard from './components/dashboard/dashboard';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth">
            <AuthComponent />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
