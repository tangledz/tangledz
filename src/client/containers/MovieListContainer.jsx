import { connect } from 'react-redux';
import MovieList from '../components/MovieList';
import { selectMovie } from '../actions/ListActions';

const mapStateToProps = state => ({
  movies: state.list.movies,
  selectedMovie: state.list.selectedMovie,
});

function mapDispatchToProps(dispatch) {
  return {
    onMovieClick: (id) => {
      Livestax.store.set('selection', id);
      dispatch(selectMovie(id));
    },
  };
}

const MovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);

export default MovieListContainer;
