import React from 'react';
import BookingListContainer from '../components/BookingListContainer';
import { RESERVED } from '../constants/status';

function ReservedBookingScreen() {
  return (
    <BookingListContainer status={RESERVED} />
  );
}

ReservedBookingScreen.navigationOptions = ({ navigation }) => ({
  headerMode: 'none',
  showHeader: false,
});

export default ReservedBookingScreen;
