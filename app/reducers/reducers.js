import { combineReducers } from 'redux';
import * as Actions from '../actions/actions';

function bookingsById(bookings) {
  return bookings.reduce((obj, booking) => {
    obj[booking.id] = booking;
    return obj;
  }, {});
}

function removeBooking(id, bookings) {
  if (!Object.prototype.hasOwnProperty.call(bookings, id)) return bookings;
  const newBookings = { ...bookings };
  delete newBookings[id];
  return newBookings;
}

function bookingsState(state = { isFetching: false, bookings: {} }, action) {
  switch (action.type) {
    case Actions.REQUEST_BOOKINGS:
      return { ...state, isFetching: true };
    case Actions.RECEIVE_BOOKINGS:
      return { ...state, isFetching: false, bookings: bookingsById(action.bookings) };
    case Actions.REMOVE_BOOKING:
      return { ...state, bookings: removeBooking(action.bookingId, state.bookings) };
    case Actions.ADD_BOOKING:
      return { ...state, bookings: { ...state.bookings, [action.booking.id]: action.booking } };
    default:
      return state;
  }
}

function bookingsByStatus(state = {}, action) {
  const {status} = action;
  switch (action.type) {
    case Actions.REQUEST_BOOKINGS:
    case Actions.RECEIVE_BOOKINGS:
    case Actions.REMOVE_BOOKING:
    case Actions.ADD_BOOKING:
      return { ...state, [status]: bookingsState(state[status], action) };
    default:
      return state;
  }
}

function selectedBooking(state = {}, action) {
  switch (action.type) {
    case Actions.SELECT_BOOKING:
      return { ...action.booking, dirty: false, previousStatus: action.booking.status_id };
    case Actions.UPDATE_BOOKING_PROTERTY:
      return { ...state, dirty: true, [action.property]: action.value };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  bookingsByStatus,
  selectedBooking,
});

export default rootReducer;
