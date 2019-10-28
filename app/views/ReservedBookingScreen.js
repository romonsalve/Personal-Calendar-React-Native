import React from 'react';
import BookingListContainer from '../components/BookingListContainer';
import { RESERVED } from '../constants/status';

export default function ReservedBookingScreen() {
  return (
    <BookingListContainer status={RESERVED} />
  );
}
