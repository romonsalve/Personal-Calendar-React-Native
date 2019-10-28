import { connect } from 'react-redux';
import { setStatus } from '../actions/actions';
import { fetchBookings } from '../reducers/reducers';
import BookingList from './BookingList';


function mapStateToProps(state, ownProps) {
  const { bookings = [], isFetching = false } = state.bookingsByStatus[ownProps.status] || {};
  return {
    selectedStatus: state.selectedStatus,
    bookings,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleItemPress: (status) => { dispatch(setStatus(status)); },
    fetchBookings: (status) => { dispatch(fetchBookings(status)); },
  };
}

const BookingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookingList);

export default BookingListContainer;
