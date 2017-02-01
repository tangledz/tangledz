import fetch from 'isomorphic-fetch';

export const REQUEST_DETAILS = 'REQUEST_DETAILS';
export const RECEIVE_DETAILS = 'RECEIVE_DETAILS';

export const requestDetails = id => ({
  type: REQUEST_DETAILS,
  id,
});

export const receiveDetails = (id, json) => ({
  type: RECEIVE_DETAILS,
  id,
  json,
  details: json,
});

export function fetchDetails(id) {
  return (dispatch) => {
    console.log(id);
    dispatch(requestDetails(id));
    return fetch(`https://www.omdbapi.com/?t=${id}&y=&plot=short&r=json`)
      .then(response => response.json())
      .then(json => dispatch(receiveDetails(id, json)));
  };
}
