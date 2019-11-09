import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <img src="https://ewscripps.brightspotcdn.com/dims4/default/393121b/2147483647/strip/true/crop/1024x576+0+54/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2Fca%2F1c%2F0b4f926b4409979cfdd2ff743dca%2Fgettyimages-1054424572.jpg" alt="Italian Trulli" />
        <p>
          There are only two sites you can add streams currently, mixer and twitch. We are working on being able to integrate more websites. 
        </p>
        <a
          className="App-link"
          href="https://twitch.tv"
          target="_blank"
          rel="noopener noreferrer"
          class="label"
        >
          twitch
        </a>
        <a
          className="App-link"
          href="https://mixer.com"
          target="_blank"
          rel="noopener noreferrer"
          class="label"
        >
          mixer
        </a>
        <br></br>
        <p>
          Add your favorite streamers here!
        </p>
        <form>
          <label>
            Streamer's link:
            <input type="text" name="name" placeholder="https://twitch.tv/katevolved" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br></br>
      </header>
    </div>
  );
}



export default App;
