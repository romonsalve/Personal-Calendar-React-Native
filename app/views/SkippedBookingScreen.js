import React from 'react';
import BookingListContainer from '../components/BookingListContainer';
import { SKIPPED } from '../constants/status';

export default function SkippedBookingScreen() {
  return (
    <BookingListContainer status={SKIPPED} />
  );
}
