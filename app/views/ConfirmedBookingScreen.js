import React from 'react';
import BookingListContainer from '../components/BookingListContainer';
import { CONFIRMED } from '../constants/status';

export default function ConfirmedBookingScreen() {
  return (
    <BookingListContainer status={CONFIRMED} />
  );
}
