import {
  REQUEST_DETAILS, RECEIVE_DETAILS, VIEW_DETAILS,
} from '../actions';

const initialState = {
  details: { title: '', director: '' },
};

const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DETAILS:
      return state;
    case VIEW_DETAILS:
      return { details: action.details };
    case RECEIVE_DETAILS:
      return { details: action.details };
    default:
      return state;
  }
};

export default movieDetailsReducer;
