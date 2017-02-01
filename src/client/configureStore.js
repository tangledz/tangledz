import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import MovieListReducer from './reducers/MovieList';
import MovieDetailsReducer from './reducers/MovieDetails';


const configureStore = createStore(
  combineReducers({
    list: MovieListReducer,
    details: MovieDetailsReducer,
  }),
  applyMiddleware(
    thunkMiddleware,
  ));

export default configureStore;
