import { getBookings, deleteBooking, patchBooking } from '../utils/requests';

export const SET_STATUS = 'SET_STATUS';
export const REQUEST_BOOKINGS = 'REQUEST_BOOKINGS';
export const RECEIVE_BOOKINGS = 'RECEIVE_POSTS';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const CHANGE_BOOKING_STATUS = 'CHANGE_BOOKING_STATUS';
export const SELECT_BOOKING = 'SELECT_BOOKING';
export const UPDATE_BOOKING_PROTERTY = 'UPDATE_BOOKING_PROTERTY';
export const ADD_BOOKING = 'ADD_BOOKING';


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

export function removeBooking(bookingId, previousStatus) {
  return {
    type: REMOVE_BOOKING,
    status: previousStatus,
    previousStatus,
    bookingId,
  };
}

export function addBooking(booking) {
  return {
    type: ADD_BOOKING,
    status: booking.status_id,
    booking,
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

export function updateBookingProperty(property, value) {
  return {
    type: UPDATE_BOOKING_PROTERTY,
    property,
    value,
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

export function cancelBooking(bookingId, previousStatus) {
  return (dispatch) => {
    return deleteBooking(bookingId)
      .then(
        (response) => response.json(),
        (error) => console.log('An error occurred.', error),
      )
      .then((json) => dispatch(removeBooking(bookingId, previousStatus)));
  };
}

export function updateBooking(booking) {
  const serializedParams = {
    status_id: booking.status_id,
  };

  return (dispatch) => {
    return patchBooking(booking.id, serializedParams)
      .then(
        (response) => response.json(),
        (error) => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(removeBooking(booking.id, booking.previousStatus));
        dispatch(addBooking(json));
        dispatch(selectBooking(json));
      });
  };
}
