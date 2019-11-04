import React from 'react';
import BookingListContainer from '../components/BookingListContainer';
import { ATTENDED } from '../constants/status';
import { BookingScreenNavOptions } from '../utils/helpers';

function AttendedBookingScreen() {
  return (
    <BookingListContainer status={ATTENDED} />
  );
}

AttendedBookingScreen.navigationOptions = BookingScreenNavOptions;

export default AttendedBookingScreen;
