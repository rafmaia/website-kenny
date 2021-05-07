import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import ContactPage from './pages/contact';
import KennyBio from './pages/kennybio';
import CarouselK from './pages/carousel';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/kennybio" component={KennyBio} exact />
        <Route path="/carousel" component={CarouselK} exact />
      </Switch>
    </Router>
  );
}

export default App;
