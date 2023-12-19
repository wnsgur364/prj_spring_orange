import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ message, setMessage ] = useState([]);
  
  useEffect(() => {
    fetch("/hello")
      .then(res => res.json())
      .then(data => setMessage(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {message.map((v, idx) => <li key={`${idx}-${v}`}>{v}</li>)}
      </header>
    </div>
  );
}

export default App;