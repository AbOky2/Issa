import React, { useState } from 'react';
import Header from './components/partials/header/header'
import './App.css';
import { AuthContext } from './context/auth'
import { getToken, getUser, setUser, setToken } from './utils/storage'


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
  const isAuth = authTokens && authUser ? true : false;

  return (
    <AuthContext.Provider value={{
      ...state,
      handleChange,
      authTokens,
      setAuthTokens: setTokens,
      isAuth,
      authUser,
      setAuthUser
    }}>
      <div className="App">
        <Header user={authUser} isAuth={isAuth} />
      </div>
    </AuthContext.Provider>
  );
}

export default App;