import React, { useState } from 'react';
import Header from './components/partials/header/header'
import './App.css';
import { AuthContext } from './context/auth';

import { getToken, getUser, setUser, setToken } from './utils/storage'
import { getCurrentUser, logout } from './services/authService'


const App = () => {

  const [state, setState] = useState({})
  const [authTokens, setAuthTokens] = useState(getToken());
  const [authUser, setAuth] = useState(getUser());

  const handleChange = (name) => (value) => setState({ ...state, [name]: value });
  const setTokens = (data) => {
    setToken(data)
    setAuthTokens(data);
  }
  const setAuthUser = (data) => {
    setUser(data)
    setAuth(data);
  }
  const logOut = (redirect = true) => {
    console.log('---')
    if (redirect)
      window.location = '/login'
    setAuthTokens(null);
    setAuthUser(null);
  };
  const isAuth = authTokens && authUser ? true : false;
  (async () => {
    try {
      if (!(await getCurrentUser()))
        logOut(false)

    } catch (error) {
      console.error('--', error)
    }
  })()
  return (
    <AuthContext.Provider value={{
      ...state,
      handleChange,
      authTokens,
      setAuthTokens: setTokens,
      isAuth,
      authUser,
      setAuthUser,
      logOut
    }}>
      <div className="App">
        <Header user={authUser} isAuth={isAuth} logOut={logOut} />
      </div>
    </AuthContext.Provider>
  );
}

export default App;