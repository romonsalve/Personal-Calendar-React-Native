export const SHOW_FILTERS = 'SHOW_FILTERS';
export const HIDE_FILTERS = 'HIDE_FILTERS';
export const APPLY_FILTERS = 'APPLY_FILTERS';
export const RESET_FILTERS = 'RESET_FILTERS';

export function showFilters() {
  return {
    type: SHOW_FILTERS,
  };
}

export function hideFilters() {
  return {
    type: HIDE_FILTERS,
  };
}

export function applyFilters() {
  return (dispatch) => {
    dispatch(hideFilters());
  };
}
