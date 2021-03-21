import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';

const Welcome = React.lazy(() => import('./routes/Welcome'));
const Home = React.lazy(() => import('./routes/Home'));

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
