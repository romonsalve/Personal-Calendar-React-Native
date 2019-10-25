import React from 'react';
import BookingScreen from './BookingScreen';
import { ATTENDED } from '../constants/status';

export default function AttendedBookingScreen() {
  return (
    <BookingScreen status={ATTENDED} />
  );
}
