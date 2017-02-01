import { connect } from 'react-redux';
import MovieList from '../components/MovieList';

const mapStateToProps = state => ({ movies: state.list.movies });

const MovieListContainer = connect(mapStateToProps)(MovieList);

export default MovieListContainer;
