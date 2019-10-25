export const RESERVED = 1;
export const CONFIRMED = 2;
export const ASSISTED = 3;
export const DIDNT_ASSIST = 6;
export const PENDING = 7;
export const WAITING = 8;

export const STATUS_TEXT = {
  1: 'Reservado',
  2: 'Confirmado',
  3: 'Asiste',
  6: 'No asiste',
  7: 'Pendiente',
  8: 'Esperando',
};

export const STATUS_ICON = {
  1: require('../assets/icon.png'),
  2: require('../assets/icon.png'),
  3: require('../assets/icon.png'),
  6: require('../assets/icon.png'),
  7: require('../assets/icon.png'),
  8: require('../assets/icon.png'),
};
