import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import Menu from './pages/Menu';
import { BreakpointProvider } from "react-socks";


const Home = React.lazy(() => import('./pages/Home'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <BreakpointProvider>
      <BrowserRouter>
        <Navigation>
          <React.Suspense fallback={<Loader active inline="centered" />}>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />} />
              <Route path="/menu-*" render={(props) => <Menu {...props} />} />
              <Route exact path="/gallery" render={(props) => <Gallery {...props} />} />
              <Route exact path="/contact" render={(props) => <Contact {...props} />} />
            </Switch>
          </React.Suspense>
        </Navigation>
      </BrowserRouter>
    </BreakpointProvider>
  );
}
export default App;
