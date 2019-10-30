const base64 = require('base-64');

const username = '4fjf146';
const password = '6hcah19dgu9vu48m7nxqgrmb4wt9twl7xjhinhdm216l0';
const baseUrl = 'https://bambucalendar.cl/api/public/v1/clients/69196/bookings';

function getBookingsUrl(status) {
  return `${baseUrl}?status_id=${status}`;
}

function bookingByIdURL(id) {
  return `https://bambucalendar.cl/api/public/v1/bookings/${id}`;
}

function headers() {
  const h = new Headers();
  const authString = `${username}:${password}`;
  h.append('Authorization', 'Basic ' + base64.encode(authString));
  return h;
}

export function getBookings(status) {
  return fetch(getBookingsUrl(status), { method: 'GET', headers: headers() });
}

export function deleteBooking(bookingId) {
  return fetch(bookingByIdURL(bookingId), { method: 'DELETE', headers: headers() });
}
