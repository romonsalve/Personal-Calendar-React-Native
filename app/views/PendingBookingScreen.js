import React from 'react';
import BookingScreen from './BookingScreen';
import { PENDING } from '../constants/status';

export default function PendingBookingScreen() {
  return (
    <BookingScreen status={PENDING} />
  );
}
