const base64 = require('base-64');

const username = '4fjf146';
const password = '6hcah19dgu9vu48m7nxqgrmb4wt9twl7xjhinhdm216l0';
const baseUrl = 'https://bambucalendar.cl/api/public/v1/clients/69196/bookings';

function getBookingsUrl(status, filters) {
  const queryParams = Object.keys(filters).map((filter) => `${filter}=${filters[filter]}`).join('&');
  return `${baseUrl}?status_id=${status}&${queryParams}`;
}

function bookingByIdURL(id) {
  return `https://bambucalendar.cl/api/public/v1/bookings/${id}`;
}

function headers() {
  const h = new Headers();
  const authString = `${username}:${password}`;
  h.append('Authorization', `Basic ${base64.encode(authString)}`);
  return h;
}

export function getBookings(status, filters) {
  return fetch(getBookingsUrl(status, filters), { method: 'GET', headers: headers() });
}

export function deleteBooking(bookingId) {
  return fetch(bookingByIdURL(bookingId), { method: 'DELETE', headers: headers() });
}

export function patchBooking(bookingId, params) {
  const body = new FormData();
  Object.keys(params).forEach((key) => body.append(key, params[key]));

  return fetch(
    bookingByIdURL(bookingId),
    { method: 'PATCH', headers: headers(), body },
  );
}
