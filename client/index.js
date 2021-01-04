import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './components/App.js';
import SongList from './components/SongList';
import CreateSong from './components/CreateSong';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
        </Route>
        <Route path="songs/new" component={App}>
          <IndexRoute component={CreateSong} />
        </Route>
        <Route path="songs/:id" component={App}>
          <IndexRoute component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
