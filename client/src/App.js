import React from 'react';
import './App.scss';

//Components
import Subscriptions from './Subscriptions'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2 className="logo">Subscript</h2>
        <ul className="nav-bar">
          <a href="#"><li className="nav-link">About</li></a>
          <a href="#"><li className="nav-link">Info</li></a>
          <a href="#"><li className="nav-link">Contact</li></a>
        </ul>
      </header>
      <Subscriptions></Subscriptions>
    <footer className="footer"><p className="copy">&copy;Will Bainton 2020</p></footer>
    </div>
  );
}

export default App;
