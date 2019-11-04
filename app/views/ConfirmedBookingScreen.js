import React from 'react';
import BookingListContainer from '../components/BookingListContainer';
import { CONFIRMED } from '../constants/status';
import { BookingScreenNavOptions } from '../utils/helpers';

function ConfirmedBookingScreen() {
  return (
    <BookingListContainer status={CONFIRMED} />
  );
}

ConfirmedBookingScreen.navigationOptions = BookingScreenNavOptions;

export default ConfirmedBookingScreen;
