import React from 'react';
import './App.css';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-boost';

const Client = new ApolloClient({
  uri : 'http://localhost:3500/graphql'
})

function App() {
  return (
    <ApolloProvider client={Client}>
      <div className="App">
        <h1>SpaceX</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
