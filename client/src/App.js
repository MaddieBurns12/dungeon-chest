import React, {useState, Component}  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Card from './components/Card/Card.js';
import Sheet from './components/CharacterSheet/Sheet.js';
import Creation from './components/Creation/Creation.js';
import Nav from './components/Nav/Nav';

import Login from './components/Login/Login.js';
import './App.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div className=" bg-gray  ">
        <Nav />
        <div className="grid place-items-center min-h-screen">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Creation" element={<Creation />} />
            <Route path="/Card" element={<Card />} />
            <Route path="/Sheet" element={<Sheet />} />
          </Routes>
          
        </div>
      </div>
    </ApolloProvider>

  );
};


export default App;
