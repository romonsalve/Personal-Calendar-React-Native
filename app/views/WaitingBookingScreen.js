import React from 'react';
import BookingScreen from './BookingScreen';
import { WAITING } from '../constants/status';

export default function WaitingBookingScreen() {
  return (
    <BookingScreen status={WAITING} />
  );
}
