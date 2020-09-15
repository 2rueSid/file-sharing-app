import React from 'react';
import { Icon, Button } from '@material-ui/core';
import Cookies from 'universal-cookie';

import './leftMenu.css';
function LeftMenu() {
  const onLogoutClick = () => {
    const cookies = new Cookies();

    cookies.remove('token');
  };

  return (
    <div className="dashboard-left-side__menu">
      <div className="left-side-icon">
        <Icon className="icon" fontSize={'large'}>
          <i className="fas fa-seedling"></i>
        </Icon>
      </div>
      <div className="controll-icons">
        <Icon>
          <i className="fas fa-layer-group"></i>
        </Icon>
        <Button id="controll-icon" href="/auth/login" onClick={onLogoutClick}>
          <i className="logout-btn fas fa-sign-out-alt fa-rotate-180"></i>
        </Button>
      </div>
    </div>
  );
}

export default LeftMenu;
