import React from 'react';
import BookingListContainer from '../components/BookingListContainer';
import { PENDING } from '../constants/status';

export default function PendingBookingScreen() {
  return (
    <BookingListContainer status={PENDING} />
  );
}
