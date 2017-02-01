const initialState = {
  movies: [],
};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_MOVIES':
      return { movies: action.movies };
    default:
      return state;
  }
};

export default movieListReducer;

