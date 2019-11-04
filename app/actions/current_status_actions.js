export const SET_CURRENT_STATUS = 'SET_CURRENT_STATUS';

export function setCurrentStatus(status) {
  return {
    type: SET_CURRENT_STATUS,
    status,
  };
}
