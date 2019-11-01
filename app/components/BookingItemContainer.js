import { connect } from 'react-redux';
import { selectBooking } from '../actions/actions';
import BookingItem from './BookingItem';


function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    selectBooking: (booking) => (dispatch(selectBooking(booking))),
  };
}

const BookingItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookingItem);

export default BookingItemContainer;
