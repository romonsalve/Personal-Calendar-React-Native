import { SET_CURRENT_STATUS } from '../actions/current_status_actions';

export default function currrentStatus(state = 1, action) {
  switch (action.type) {
    case SET_CURRENT_STATUS:
      return action.status;
    default:
      return state;
  }
}
