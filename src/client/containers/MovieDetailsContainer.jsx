import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDetails } from '../actions/DetailsActions';
import MovieDetails from '../components/MovieDetails';

const mapStateToProps = state => ({ details: state.details.details });

const MovieDetailsContainer = connect(mapStateToProps, {
  fetchDetails,
})(MovieDetails);

export default MovieDetailsContainer;

