import { combineReducers } from 'redux';
import { RESERVED } from '../constants/status';
import * as Actions from '../actions/actions';

function selectedStatus(state = RESERVED, action) {
  switch (action.type) {
    case Actions.SET_STATUS:
      return action.status;
    default:
      return state;
  }
}

const calendarApp = combineReducers({
  selectedStatus,
});

export default calendarApp;
