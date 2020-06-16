import React from 'react';
import { hot } from 'react-hot-loader/root';

import Logo from '../components/shared/Logo';
import PlanetSearch from '../components/PlanetSearch';

const App = () => (
  <>
    <Logo />
    <PlanetSearch />
  </>
);

export default hot(App);
