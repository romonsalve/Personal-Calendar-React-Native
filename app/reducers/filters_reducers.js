import moment from 'moment';
import {
  SHOW_FILTERS, HIDE_FILTERS, APPLY_FILTERS, RESET_FILTERS,
} from '../actions/filters_actions';
import { filterDisplayFormat, filterParseFormat } from '../constants/date_formats';
import { TODAY_DATE } from '../constants/env';

const defaultState = {
  visible: false,
  range_from: moment(TODAY_DATE, filterParseFormat).format(filterDisplayFormat),
  range_to: moment(TODAY_DATE, filterParseFormat).add(1, 'M').format(filterDisplayFormat),
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
