import {
  REQUEST_DETAILS, RECEIVE_DETAILS, VIEW_DETAILS,
} from '../actions/DetailsActions';

const initialState = {
  details: {  
   "Title":"Arrival",
   "Year":"2016",
   "Rated":"PG-13",
   "Released":"11 Nov 2016",
   "Runtime":"116 min",
   "Genre":"Drama, Mystery, Sci-Fi",
   "Director":"Denis Villeneuve",
   "Writer":"Eric Heisserer (screenplay), Ted Chiang (based on the story \"Story of Your Life\" written by)",
   "Actors":"Amy Adams, Jeremy Renner, Forest Whitaker, Michael Stuhlbarg",
   "Plot":"When 12 mysterious spacecraft appear around the world, linguistics professor Louise Banks is tasked with interpreting the language of the apparent alien visitors.",
   "Language":"English, Russian, Mandarin",
   "Country":"USA",
   "Awards":"Nominated for 2 Golden Globes. Another 28 wins & 150 nominations.",
   "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg",
   "Metascore":"81",
   "imdbRating":"8.3",
   "imdbVotes":"113,438",
   "imdbID":"tt2543164",
   "Type":"movie",
   "Response":"True"},
};

const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DETAILS:
      return state;
    case VIEW_DETAILS:
      return { details: action.details };
    case RECEIVE_DETAILS:
      return { details: action.details };
    default:
      return state;
  }
};

export default movieDetailsReducer;
