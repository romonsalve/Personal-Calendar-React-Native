import moment from 'moment';
import { SHOW_FILTERS, HIDE_FILTERS } from '../actions/filters_actions';
import { filterDisplayFormat } from '../constants/date_formats';

const defaultState = {
  visible: false,
  range_from: moment().format(filterDisplayFormat),
  range_to: moment().format(filterDisplayFormat),
};

export default function filters(state = defaultState, action) {
  switch (action.type) {
    case SHOW_FILTERS:
      return { ...state, visible: true };
    case HIDE_FILTERS:
      return { ...state, visible: false };
    default:
      return state;
  }
}
