import React, { useState } from 'react';
import Header from './components/partials/header/header'
import './App.css';
import { basicAuth } from './services/authService'

const App = () => {
  const [state, setState] = useState({
    user: null
  })

  const handleChange = (name) => (value) => setState({ ...state, [name]: value });
  return (
    <div className="App">
      <Header user={state.user} />
      {/* <header className="App-header">
        <a href='/#'>Kit le nid</a>
      </header>
      <button onClick={() => basicAuth({
        email: 'toto@toto.toto',
        password: 'sdfsdfdsf',
        // lastName: 'tata',
      }, handleChange('user'))}>test</button> */}
    </div>
  );
}

export default App;