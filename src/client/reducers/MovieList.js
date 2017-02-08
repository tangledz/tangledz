const initialState = {
  movies: [],
  selectedMovie: '',
};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_MOVIES':
      return { movies: action.movies, selectedMovie: action.selectedMovie };
    case 'SELECT_MOVIE':
      return { movies: state.movies, selectedMovie: action.selectedMovie };
    default:
      return state;
  }
};

export default movieListReducer;
