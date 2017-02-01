import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { viewMovies } from './actions/ListActions';

import MovieListContainer from './containers/MovieListContainer';
import MovieDetailsContainer from './containers/MovieDetailsContainer';

import configureStore from './configureStore';

const store = configureStore;

const App = () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route
        path="/list"
        component={MovieListContainer}
        onEnter={() => store.dispatch(viewMovies())}
      />
      <Route
        path="/view/:id"
        component={MovieDetailsContainer}
      />
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('.container-fluid'));
