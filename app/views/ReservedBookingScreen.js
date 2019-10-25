import React from 'react';
import BookingScreen from './BookingScreen';
import { RESERVED } from '../constants/status';

export default function ReservedBookingScreen() {
  return (
    <BookingScreen status={RESERVED} />
  );
}
