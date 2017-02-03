import { connect } from 'react-redux';
import MovieList from '../components/MovieList';

const mapStateToProps = state => ({ movies: state.list.movies, selected: state.selected });

const MovieListContainer = connect(mapStateToProps)(MovieList);

export default MovieListContainer;
