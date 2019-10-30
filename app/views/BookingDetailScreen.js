import React from 'react';
import {
  Text, View, StyleSheet, Button, Alert,
} from 'react-native';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import { Spacing, Colors } from '../styles';
import es_CL from '../i18n/es-CL';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingInfo: {
    flex: 2,
  },
  timeContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  timeText: {
    marginRight: Spacing.extraSmall,
  },
  clientInfo: {
    flex: 2,
  },
  cancelButton: {
    flex: 1,
    alignSelf: 'flex-end',
    color: Colors.CANCEL_ERROR,
  },
});

function renderEditButton() {
  return (
    <Button
      onPress={() => alert('This is a button!')}
      title={es_CL.commons.edit}
    />
  );
}

function pressCancelButtonHandler(booking, navigation, cancelBooking) {
  cancelBooking(booking.id, booking.status_id);
  navigation.goBack();
}

function renderCancelAlert(booking, navigation, cancelBooking) {
  return Alert.alert(
    es_CL.booking.cancelAlert.title({ service: booking.service }),
    es_CL.booking.cancelAlert.message,
    [
      {
        text: es_CL.booking.actions.cancel,
        onPress: () => pressCancelButtonHandler(booking, navigation, cancelBooking),
        style: 'destructive',
      },
      { text: es_CL.commons.back },
    ],
    { cancelable: false },
  );
}

function BookingDetailScreen({ navigation, cancelBooking }) {
  const booking = navigation.getParam('booking', {});
  const formatDate = 'dddd, D MMMM YYYY';
  const formatTime = 'HH:DD';
  const price = `$${booking.price}`;
  const clientName = `${booking.client.first_name} ${booking.client.last_name}`;
  return (
    <View style={styles.container}>
      <View style={styles.bookingInfo}>
        
        <Text>{booking.service}</Text>
        <Text>{price}</Text>
        <Text>{moment(booking.start).format(formatDate) }</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{moment(booking.start).format(formatTime) }</Text>
          <Text style={styles.timeText}>{moment(booking.end).format(formatTime) }</Text>
        </View>
      </View>
      
      <View style={styles.clientInfo}>
        <Text>Cliente</Text>
        <Text>{clientName}</Text>
        <Text>{booking.client.email}</Text>
      </View>

      <Button
        title={es_CL.booking.actions.cancel}
        onPress={() => renderCancelAlert(booking, navigation, cancelBooking)}
        color={Colors.CANCEL_ERROR}
      />
      
    </View>
  );
}

export default withNavigation(BookingDetailScreen);

BookingDetailScreen.navigationOptions = {
  headerTitle: es_CL.screens.bookingDetail.headerTitle,
  headerRight: renderEditButton,
};
