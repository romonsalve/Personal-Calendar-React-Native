import React from 'react';
import BookingScreen from './BookingScreen';
import { CONFIRMED } from '../constants/status';

export default function ConfirmedBookingScreen() {
  return (
    <BookingScreen status={CONFIRMED} />
  );
}
