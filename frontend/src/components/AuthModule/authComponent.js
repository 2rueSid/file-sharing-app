import React from 'react';
import { Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';

import AuthFormBox from './FormBox/FormBoxView';

import './authComponent.css';
function AuthComponent() {
  return (
    <div className='auth-component'>
      <div className='auth-side'>
        <Link to='/'>
          <Icon className='icon' fontSize={'large'}>
            <i className='fas fa-seedling'></i>
          </Icon>
        </Link>
      </div>
      <AuthFormBox />
    </div>
  );
}

export default AuthComponent;
