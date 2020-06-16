import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route } from 'react-router-dom';

import Planet from '../components/Planet';
import PlanetSearch from '../components/PlanetSearch';

const App = () => (
  <Switch>
    <Route path="/planet/:id" component={Planet} />
    <Route path="/" component={PlanetSearch} />
  </Switch>
);

export default hot(App);
