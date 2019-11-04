import React from 'react';
import BookingListContainer from '../components/BookingListContainer';
import { PENDING } from '../constants/status';
import { BookingScreenNavOptions } from '../utils/helpers';

function PendingBookingScreen() {
  return (
    <BookingListContainer status={PENDING} />
  );
}
PendingBookingScreen.navigationOptions = BookingScreenNavOptions;

export default PendingBookingScreen;
