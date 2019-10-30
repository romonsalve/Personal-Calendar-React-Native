import { getBookings, deleteBooking } from '../utils/requests';

export const SET_STATUS = 'SET_STATUS';
export const REQUEST_BOOKINGS = 'REQUEST_BOOKINGS';
export const RECEIVE_BOOKINGS = 'RECEIVE_POSTS';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const CHANGE_BOOKING_STATUS = 'CHANGE_BOOKING_STATUS';
export const SELECT_BOOKING = 'SELECT_BOOKING';


export function setStatus(status) {
  return {
    type: SET_STATUS,
    status,
  };
}

export function requestBookings(status) {
  return {
    type: REQUEST_BOOKINGS,
    status,
  };
}

export function receiveBookings(status, json) {
  return {
    type: RECEIVE_BOOKINGS,
    status,
    bookings: json.filter((booking) => booking.status_id === status),
  };
}

export function removeBooking(booking, previousStatus) {
  return {
    type: REMOVE_BOOKING,
    bookingId: booking.id,
    status: previousStatus,
  };
}

export function changeBookingStatus(bookingId, currentStatus, newStatus) {
  return {
    type: CHANGE_BOOKING_STATUS,
    bookingId,
    currentStatus,
    newStatus,
  };
}

export function selectBooking(booking) {
  return {
    type: SELECT_BOOKING,
    booking,
  };
}

export function fetchBookings(status) {
  return (dispatch) => {
    dispatch(requestBookings(status));

    return getBookings(status)
      .then((response) => response.json())
      .then((json) => dispatch(receiveBookings(status, json)));
  };
}

export function cancelBooking(bookingId, currentStatus) {
  return (dispatch) => {
    return deleteBooking(bookingId)
      .then(
        (response) => response.json(),
        (error) => console.log('An error occurred.', error),
      )
      .then((json) => dispatch(removeBooking(json, currentStatus)));
  };
}
