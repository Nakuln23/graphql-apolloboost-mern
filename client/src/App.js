import React from 'react';
import './App.css';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import Launches from './components/Launches';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'http://localhost:3500/graphql'
})

const Client = new ApolloClient({
  link,
  cache
})

function App() {
  return (
    <ApolloProvider client={Client}>
      <div>
        <h1>SpaceX</h1>
        <Launches/>
      </div>
    </ApolloProvider>
  );
}

export default App;
