import React from 'react';
import BookingListContainer from '../components/BookingListContainer';
import { ATTENDED } from '../constants/status';

export default function AttendedBookingScreen() {
  return (
    <BookingListContainer status={ATTENDED} />
  );
}
