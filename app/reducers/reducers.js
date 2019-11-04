import { combineReducers } from 'redux';
import visibleMainHeader from './visible_main_header_reducer';
import filters from './filters_reducers';
import { bookingsByStatus, selectedBooking } from './bookings_reducers';

const rootReducer = combineReducers({
  bookingsByStatus,
  selectedBooking,
  visibleMainHeader,
  filters,
});

export default rootReducer;
