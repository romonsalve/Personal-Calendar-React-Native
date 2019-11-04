import React from 'react';
import BookingListContainer from '../components/BookingListContainer';
import { RESERVED } from '../constants/status';
import { BookingScreenNavOptions } from '../utils/helpers';

function ReservedBookingScreen() {
  return (
    <BookingListContainer status={RESERVED} />
  );
}

ReservedBookingScreen.navigationOptions = BookingScreenNavOptions;

export default ReservedBookingScreen;
