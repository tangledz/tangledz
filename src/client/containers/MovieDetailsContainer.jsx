import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDetails } from '../actions/DetailsActions';
import MovieDetails from '../components/MovieDetails';

const mapStateToProps = state => ({ details: state.details.details });

class MovieDetailsContainer extends React.Component {

  componentWillMount() {
    this.props.fetchDetails(this.props.params.id);

    Livestax.store.watch("best-picture-nominations.selection", function(movie) {
      console.log('movie_selected', movie);
      window.location = '/#/view/' + movie;
      window.location.reload();
    });
  }

  render() {
    return <MovieDetails details={this.props.details} />;
  }
}

MovieDetailsContainer.propTypes = {
  params: PropTypes.shape({
    id: React.PropTypes.string,
  }).isRequired,
  fetchDetails: PropTypes.func.isRequired,
  details: PropTypes.shape({
    Title: React.PropTypes.string,
    Plot: React.PropTypes.string,
    Genre: React.PropTypes.string,
    Actors: React.PropTypes.string,
    Metascore: React.PropTypes.integer,
    Year: React.PropTypes.integer,
  }).isRequired,
};

export default connect(mapStateToProps, {
  fetchDetails,
})(MovieDetailsContainer);
