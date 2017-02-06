const initialState = {
  movies: [],
  selected_movie: 'Arrival',
};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_MOVIES':
      return { movies: action.movies, selected_movie: action.selected_movie };
    case 'SELECT_MOVIE':
      return { movies: state.movies, selected_movie: action.selected_movie };
    default:
      return state;
  }
};

export default movieListReducer;
