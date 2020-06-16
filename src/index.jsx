import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import App from './app/App';
import Logo from './components/shared/Logo';
import './index.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://mini-yelp-hasura.herokuapp.com/v1/graphql',
  }),
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
