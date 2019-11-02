export const SHOW_MAIN_HEADER = 'SHOW_MAIN_HEADER';
export const HIDE_MAIN_HEADER = 'HIDE_MAIN_HEADER';

export function showMainHeader() {
  return {
    type: SHOW_MAIN_HEADER,
  };
}

export function hideMainHeader() {
  return {
    type: HIDE_MAIN_HEADER,
  };
}
