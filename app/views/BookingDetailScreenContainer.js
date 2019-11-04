import { connect } from 'react-redux';
import { cancelBooking } from '../actions/bookings_actions';
import BookingDetailScreen from './BookingDetailScreen';

function mapStateToProps(state) {
  return { booking: state.selectedBooking };
}

function mapDispatchToProps(dispatch) {
  return {
    cancelBooking: (id, status) => { dispatch(cancelBooking(id, status)); },
  };
}

const BookingDetailScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookingDetailScreen);

export default BookingDetailScreenContainer;
