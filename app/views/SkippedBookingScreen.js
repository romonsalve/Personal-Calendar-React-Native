import React from 'react';
import BookingScreen from './BookingScreen';
import { SKIPPED } from '../constants/status';

export default function SkippedBookingScreen() {
  return (
    <BookingScreen status={SKIPPED} />
  );
}
