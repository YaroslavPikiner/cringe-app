import React, { useState, useContext, createContext } from 'react';

import localStorageApi from '../../utils/localStorage';

const authContext: React.Context<any> = createContext(null);

interface ChildrenType {
  children: React.ReactNode | React.ReactChild;
}

export function ProvideAuth({ children }: ChildrenType) {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [isAuth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const [haveAccount, setAccount] = useState();

  function logIn(userName: string, pass: string): void {
    if (localStorageApi.get(userName) === pass) {
      setUser({
        name: userName,
        password: pass,
      });

      return setAuth(true);
    }

    return setAuth(false);
  }

  function signUp(userName: string, pass: string) {
    if (userName && pass) {
      localStorageApi.set(userName, pass);
      logIn(userName, pass);
    }
  }

  function logOut() {
    setAuth(false);
  }

  return {
    user,
    isAuth,
    logIn,
    logOut,
    signUp,
    setUser,
    setAuth,
    haveAccount,
    setAccount,
  };
}
