export const VIEW_MOVIES = 'VIEW_MOVIES';

export const viewMovies = () => ({
  type: VIEW_MOVIES,
  movies: ['Arrival', 'Fences', 'Hacksaw Ridge', 'Hell or High Water', 'Hidden Figures', 'La La Land', 'Lion', 'Manchester by the Sea', 'Moonlight'],
  selectedMovie: '',
});

export const SELECT_MOVIE = 'SELECT_MOVIE';

export const selectMovie = id => ({
  type: SELECT_MOVIE,
  selectedMovie: id,
  id,
});
