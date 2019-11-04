import { connect } from 'react-redux';
import { fetchBookings } from '../actions/bookings_actions';
import BookingList from './BookingList';


function mapStateToProps(state, ownProps) {
  const { bookings = {}, isFetching = false } = state.bookingsByStatus[ownProps.status] || {};
  const { range_from, range_to } = state.filters;
  return {
    bookings: Object.values(bookings),
    isFetching,
    filters: { range_from, range_to },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBookings: (status, filters) => { dispatch(fetchBookings(status, filters)); },
  };
}

const BookingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookingList);

export default BookingListContainer;
