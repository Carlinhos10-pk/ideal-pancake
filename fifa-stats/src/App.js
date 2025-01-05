import logo from './logo.svg';
import React from 'react';
import Players from './Players';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Estatísticas do FIFA</h1>
            </header>
            <main>
                <Players />
            </main>
        </div>
    );
}

export default App;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
