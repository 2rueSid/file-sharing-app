import React, { useContext } from 'react';
import { Icon, Button } from '@material-ui/core';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import { MainContext } from '../../../indexContextProvider';

import './leftMenu.css';
function LeftMenu() {
  const { setLogined } = useContext(MainContext);

  const onLogoutClick = () => {
    const cookies = new Cookies();

    cookies.remove('token');
    setLogined(false);

    const logined = localStorage.getItem('isLogined');

    if (logined) {
      localStorage.removeItem('isLogined');
    }
  };

  return (
    <div className='dashboard-left-side__menu'>
      <div className='left-side-icon'>
        <Link to='/'>
          <Icon className='icon' fontSize={'large'}>
            <i className='fas fa-seedling'></i>
          </Icon>
        </Link>
      </div>
      <div className='controll-icons'>
        <Button id='controll-icon' href='/' onClick={onLogoutClick}>
          <i className='logout-btn fas fa-sign-out-alt fa-rotate-180'></i>
        </Button>
      </div>
    </div>
  );
}

export default LeftMenu;
