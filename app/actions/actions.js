export const SET_STATUS = 'SET_STATUS';
export const REQUEST_BOOKINGS = 'REQUEST_BOOKINGS';
export const RECEIVE_BOOKINGS = 'RECEIVE_POSTS';

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
    bookings: json,
  };
}
