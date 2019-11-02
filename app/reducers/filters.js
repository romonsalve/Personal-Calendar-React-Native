import { SHOW_FILTERS, HIDE_FILTERS } from '../actions/filters_actions';

export default function filters(state = { visible: false, start: null, end: null }, action) {
  switch (action.type) {
    case SHOW_FILTERS:
      return { ...state, visible: true };
    case HIDE_FILTERS:
      return { ...state, visible: false };
    default:
      return state;
  }
}
