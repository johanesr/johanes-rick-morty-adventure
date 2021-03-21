import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';

import ThemeSong from './theme.mp3';

const Welcome = React.lazy(() => import('./routes/Welcome'));
const Home = React.lazy(() => import('./routes/Home'));

let audio = new Audio(ThemeSong);
audio.play();

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div className="app-wrapper">
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
