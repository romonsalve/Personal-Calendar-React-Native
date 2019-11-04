import React from 'react';
import BookingListContainer from '../components/BookingListContainer';
import { WAITING } from '../constants/status';
import { BookingScreenNavOptions } from '../utils/helpers';

function WaitingBookingScreen() {
  return (
    <BookingListContainer status={WAITING} />
  );
}

WaitingBookingScreen.navigationOptions = BookingScreenNavOptions;

export default WaitingBookingScreen;
