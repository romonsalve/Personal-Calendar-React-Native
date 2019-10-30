import { connect } from 'react-redux';
import { setStatus, fetchBookings } from '../actions/actions';
import BookingEdit from './BookingEdit';


function mapStateToProps(state) {
  return { ...state.selectedBooking };
}

function mapDispatchToProps(dispatch) {
  return {
    updateBooking: (booking, previousStatus) => (
      dispatch(updateBooking(booking, previousStatus))
    ),
  };
}

const BookingEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookingEdit);

export default BookingEditContainer;
