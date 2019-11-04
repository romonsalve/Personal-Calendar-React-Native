import React from 'react';
import BookingListContainer from '../components/BookingListContainer';
import { SKIPPED } from '../constants/status';
import { BookingScreenNavOptions } from '../utils/helpers';

function SkippedBookingScreen() {
  return (
    <BookingListContainer status={SKIPPED} />
  );
}

SkippedBookingScreen.navigationOptions = BookingScreenNavOptions;

export default SkippedBookingScreen;
