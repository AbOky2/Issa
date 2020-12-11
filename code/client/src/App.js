import React, { useState } from 'react';
import Header from './components/partials/header/header'
import { AuthContext } from './context/auth';
import { getToken, getUser, setUser, clearUser, setToken, clearToken } from './utils/storage'
import { getCurrentUser, logout } from './services/authService'
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [state, setState] = useState({})
  const [authTokens, setAuthTokens] = useState(getToken());
  const [authUser, setAuth] = useState(getUser());
  const handleChange = (name) => (value) => setState({ ...state, [name]: value });
  const setTokens = (data) => {
    setToken(data)
    setAuthTokens(data);
  }
  const setAuthUser = (data, cb) => {
    setUser(data)
    setAuth(data);
    cb && cb()
  }
  const logOut = (redirect = true) => {
    if (redirect) {
      window.location = '/login'
    }
    setAuthTokens(null);
    setAuthUser(null);
    clearToken();
    clearUser();
  };
  const isAuth = authTokens && authUser ? true : false;

  (async () => await getCurrentUser())()

  return (
    <AuthContext.Provider value={{
      ...state,
      handleChange,
      authTokens,
      setAuthTokens: setTokens,
      isAuth,
      authUser,
      setAuthUser,
      logOut,
    }}>
      <div className="App">
        <Header user={authUser} isAuth={isAuth} logOut={logOut} />
      </div>
      <ToastContainer
        autoClose={3000}
        position={toast.POSITION.TOP_CENTER}
      />
    </AuthContext.Provider>
  );
}

export default App;