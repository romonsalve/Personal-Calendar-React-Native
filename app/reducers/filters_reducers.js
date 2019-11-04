import moment from 'moment';
import {
  SHOW_FILTERS, HIDE_FILTERS, APPLY_FILTERS, RESET_FILTERS,
} from '../actions/filters_actions';
import { filterDisplayFormat } from '../constants/date_formats';

const defaultState = {
  visible: false,
  range_from: moment().format(filterDisplayFormat),
  range_to: moment().add(1, 'M').format(filterDisplayFormat),
  apply: false,
};

export default function filters(state = defaultState, action) {
  switch (action.type) {
    case SHOW_FILTERS:
      return { ...state, visible: true };
    case HIDE_FILTERS:
      return { ...state, visible: false };
    case APPLY_FILTERS:
      return {
        ...state, ...action.filters, apply: true, visible: false,
      };
    case RESET_FILTERS:
      return defaultState;
    default:
      return state;
  }
}
