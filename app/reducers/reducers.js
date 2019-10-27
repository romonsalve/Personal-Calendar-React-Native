import { combineReducers } from 'redux';
import { RESERVED } from '../constants/status';
import * as Actions from '../actions/actions';
import { getBookings } from '../utils/requests';

function selectedStatus(state = RESERVED, action) {
  switch (action.type) {
    case Actions.SET_STATUS:
      return action.status;
    default:
      return state;
  }
}

function bookings(state = { isFetching: false, bookings: [] }, action) {
  switch (action.type) {
    case Actions.REQUEST_BOOKINGS:
      return { ...state, isFetching: true };
    case Actions.RECEIVE_BOOKINGS:
      return { ...state, isFetching: false, bookings: action.bookings };
    default:
      return state;
  }
}

function bookingsByStatus(state = {}, action) {
  switch (action.type) {
    case Actions.REQUEST_BOOKINGS:
    case Actions.RECEIVE_BOOKINGS:
      return { ...state, [action.status]: bookings(state[action.status], action) };
    default:
      return state;
  }
}

export function fetchBookings(status) {
  return (dispatch) => {
    dispatch(Actions.requestBookings(status));

    return getBookings(status)
      .then((response) => response.json())
      .then((json) => dispatch(Actions.receiveBookings(status, json)));
  };
}

const rootReducer = combineReducers({
  bookingsByStatus,
  selectedStatus,
});

export default rootReducer;
