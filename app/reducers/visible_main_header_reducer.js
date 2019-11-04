import { SHOW_MAIN_HEADER, HIDE_MAIN_HEADER } from '../actions/visible_main_header_actions';
import { SELECT_BOOKING } from '../actions/bookings_actions';

export default function visibleMainHeader(state = true, action) {
  switch (action.type) {
    case SHOW_MAIN_HEADER:
      return true;
    case HIDE_MAIN_HEADER:
    case SELECT_BOOKING:
      return false;
    default:
      return state;
  }
}
