import fetch from 'isomorphic-fetch';

export const VIEW_MOVIES = 'VIEW_MOVIES';

export const viewMovies = () => ({
  type: VIEW_MOVIES,
  movies: ['Arrival', 'Fences', 'Hacksaw Ridge', 'Hell or High Water', 'Hidden Figures', 'La La Land', 'Lion', 'Manchester by the Sea', 'Moonlight'],
});

export const VIEW_DETAILS = 'VIEW_DETAILS';

export const REQUEST_DETAILS = 'REQUEST_DETAILS';

export const requestDetails = id => ({
  type: REQUEST_DETAILS,
  id,
});

export const RECEIVE_DETAILS = 'RECEIVE_DETAILS';

export const receiveDetails = (id, json) => ({
  type: RECEIVE_DETAILS,
  id,
  json,
  details: json,
});

export const SELECT_ID = 'SELECT_ID';

export const selectID = id => ({
  type: SELECT_ID,
  id,
});

export function fetchDetails(id) {
  return (dispatch) => {
    console.log(id);
    dispatch(requestDetails(id));
    return fetch(`http://www.omdbapi.com/?t=${id}&y=&plot=short&r=json`)
      .then(response => response.json())
      .then(json => dispatch(receiveDetails(id, json)));
  };
}
