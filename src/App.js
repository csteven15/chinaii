import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';


function App() {

  return (
    <BrowserRouter>
      <Navigation>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/menu" render={(props) => <Menu {...props} />} />
          <Route exact path="/gallery" render={(props) => <Gallery {...props} />} />
          <Route exact path="/contact" render={(props) => <Contact {...props} />} />
        </Switch>
      </Navigation>
    </BrowserRouter>
  );
}
export default App;
