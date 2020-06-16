import React from 'react';
import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';

import { List, ListItem, Badge } from './style';

const PLANET = gql`
  query Planet($id: uuid!) {
    planets_by_pk(id: $id) {
      id
      name
      cuisine
      reviews(order_by: { created_at: desc }) {
        id
        body
        created_at
      }
    }
  }
`;

const Planet = ({ match: { params: id } }) => {
  const { loading, error, data } = useQuery(PLANET, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! :(</p>;

  const { name, cuisine, reviews } = data.planets_by_pk;

  return (
    <div>
      <h3>
        {name} <Badge>{cuisine}</Badge>
      </h3>
      <List>
        {reviews.map(review => (
          <ListItem key={review.id}>{review.body}</ListItem>
        ))}
      </List>
    </div>
  );
};

Planet.propTypes = {
  match: PropTypes.shape(PropTypes.object).isRequired,
};

export default Planet;
