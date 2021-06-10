import React, { createContext, useState } from 'react';

export const MainContext = createContext(null);

function ContextProvider(props) {
  const [logined, setLogined] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <MainContext.Provider
      value={{
        logined,
        setLogined,
        currentUser,
        setCurrentUser,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}

export default ContextProvider;
