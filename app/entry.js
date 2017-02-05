import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactGA from 'react-ga';

// Layouts
import Main from './layouts/Main';
import FullPage from './layouts/FullPage';

import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Stats from './components/Stats';
import Photography from './components/Photography';
import Contact from './components/Contact';

import NotFound from './components/NotFound';

ReactGA.initialize('UA-68649021-1');

const update = () => {
  window.scrollTo(0, 0);
  ReactGA.pageview(window.location.pathname);
};

// All of our CSS
require('../public/css/main.scss');

ReactDOM.render(
  <Router onUpdate={update} history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/stats" component={Stats} />
      <Route path="/contact" component={Contact} />
    </Route>
    <Route path="/" component={FullPage}>
      <Route path="/photography" component={Photography} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  </Router>,
  document.getElementById('root'),
);