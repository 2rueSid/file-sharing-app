/* tslint:disable */
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, logined, ...rest }) => {
  const [isLogined, setIsLogined] = useState(logined);

  useEffect(() => {
    const localIsLogined = localStorage.getItem('isLogined');
    if (localIsLogined) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, []);

  console.log(isLogined);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogined ? (
          <>
            <Component {...props} {...rest} />
          </>
        ) : (
          <Redirect to='/auth/login' />
        )
      }
    />
  );
};
