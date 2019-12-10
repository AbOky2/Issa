import React from 'react';
import Header from './components/partials/header/header'
import './App.css';
import { login } from './services/authService'

const App = () => {

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <a href='/#'>Kit le nid</a>
      </header>
      <button onClick={() => login({
        email: 'tata@tata.tata',
        password: 'tata',
        lastName: 'tata',
      }, () => console.log('send'))}>test</button>
    </div>
  );
}

export default App;