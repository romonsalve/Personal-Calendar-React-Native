import React from 'react';
import BookingListContainer from '../components/BookingListContainer';
import { WAITING } from '../constants/status';

export default function WaitingBookingScreen() {
  return (
    <BookingListContainer status={WAITING} />
  );
}
