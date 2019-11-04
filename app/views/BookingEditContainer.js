import { connect } from 'react-redux';
import { updateBookingProperty, updateBooking } from '../actions/bookings_actions';
import BookingEdit from './BookingEdit';


function mapStateToProps(state) {
  return { booking: state.selectedBooking };
}

function mapDispatchToProps(dispatch) {
  return {
    // updateBooking: (booking, previousStatus) => (
    //   dispatch(updateBooking(booking, previousStatus))
    // ),
    updateBookingProperty: (property, value) => (
      dispatch(updateBookingProperty(property, value))
    ),
    updateBooking: (booking) => (
      dispatch(updateBooking(booking))
    ),
  };
}

const BookingEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookingEdit);

export default BookingEditContainer;
