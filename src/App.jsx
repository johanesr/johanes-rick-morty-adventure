import React, { useState, Suspense } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.scss';

import ThemeSong from './theme.mp3';

const Welcome = React.lazy(() => import('./routes/Welcome'));
const Home = React.lazy(() => import('./routes/Home'));
const CharList = React.lazy(() => import('./routes/CharList'))

let audio = new Audio(ThemeSong);
audio.loop = true;

function App() {
  const [audioPlaying, setAudioPlaying] = useState(false);

  function audioPlayer() {
    if(audioPlaying) {
      audio.pause();
      setAudioPlaying(false);
    } else {
      audio.play();
      setAudioPlaying(true);
    }
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div className="app-wrapper">
          <div className="audio-player">
            {!audioPlaying ?
              <button onClick={audioPlayer}><i className="fa fa-play"/></button>
              :
              <button onClick={audioPlayer}><i className="fa fa-pause"/></button>
            }
          </div>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/list">
              <CharList />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
