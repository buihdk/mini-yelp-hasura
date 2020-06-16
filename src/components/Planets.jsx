import React from 'react';
import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';

import { List, ListItem, Badge } from './style';

const PLANETS = gql`
  {
    planets {
      cuisine
      id
      name
    }
  }
`;

const Planets = ({ newPlanets }) => {
  const { loading, error, data } = useQuery(PLANETS);

  const renderPlanets = planets =>
    planets.map(({ id, name, cuisine }) => (
      <ListItem key={id}>
        {name} <Badge>{cuisine}</Badge>
      </ListItem>
    ));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! :(</p>;

  return <List>{renderPlanets(newPlanets || data.planets)}</List>;
};

Planets.propTypes = {
  newPlanets: PropTypes.arrayOf(PropTypes.object),
};

Planets.defaultProps = {
  newPlanets: [],
};

export default Planets;
