import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Add your favorite streamers here!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form>
          <label>
            Streamer's link:
            <input type="text" name="name" placeholder="https://twitch.tv/katevolved" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}



export default App;
