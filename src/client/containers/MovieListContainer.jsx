import { connect } from 'react-redux';
import MovieList from '../components/MovieList';
import { selectMovie } from '../actions/ListActions';

const mapStateToProps = state => ({ movies: state.list.movies, selected_movie: state.list.selected_movie });

const mapDispatchToProps = (dispatch) => {
  return {
    onMovieClick: (id) => {
      Livestax.store.set("selection", movie);
      dispatch(selectMovie(id))
    }
  }
}

const MovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);

export default MovieListContainer;
