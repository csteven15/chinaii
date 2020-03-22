import React from 'react';
import { BreakpointProvider } from 'react-socks';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './components/loader.css';
import Navigation from './components/Navigation';

const Home = React.lazy(() => import('./pages/Home'));
const Menu = React.lazy(() => import('./pages/Menu'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));


function App() {
  return (
    <BreakpointProvider>
      <BrowserRouter>
        <Navigation>
          <React.Suspense fallback={<div className="loader">Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </React.Suspense>
        </Navigation>
      </BrowserRouter>
    </BreakpointProvider>
  );
}
export default App;
