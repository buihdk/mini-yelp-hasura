import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/link-ws';

import App from './app/App';
import Logo from './components/shared/Logo';
import './index.css';

if (process && process.env) {
  console.warn(`node environment: ${process.env.NODE_ENV}`);
}

const GRAPHQL_ENDPOINT = 'mini-yelp-hasura.herokuapp.com/v1/graphql';

const httpLink = new HttpLink({
  uri: `https://${GRAPHQL_ENDPOINT}`,
});

const wsLink = new WebSocketLink({
  uri: `wss://${GRAPHQL_ENDPOINT}`,
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Logo />
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
