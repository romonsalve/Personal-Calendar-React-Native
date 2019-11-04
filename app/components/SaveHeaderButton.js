import React from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { updateBooking } from '../actions/bookings_actions';
import esCL from '../i18n/es-CL';


function SaveHeaderButton({ booking, navigation, updateBooking}) {
  return (
    <Button
      title={esCL.commons.save}
      onPress={() => {
        updateBooking(booking);
        navigation.goBack();
      }}
      disabled={!booking.dirty}
    />
  );
}

function mapStateToProps(state) {
  return { booking: state.selectedBooking };
}

function mapDispatchToProps(dispatch) {
  return {
    updateBooking: (booking) => (
      dispatch(updateBooking(booking))
    ),
  };
}

const SaveHeaderButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveHeaderButton);

export default SaveHeaderButtonContainer;