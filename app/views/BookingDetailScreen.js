import React from 'react';
import {
  Text, View, StyleSheet, Button, Alert, Picker,
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

function renderCancelAlert({ booking, navigation, cancelBooking }) {
  return Alert.alert(
    es_CL.booking.cancelAlert.title({ service: booking.service }),
    es_CL.booking.cancelAlert.message,
    [
      {
        text: es_CL.booking.actions.cancel,
        onPress: () => {
          cancelBooking(booking.id, booking.status_id);
          navigation.goBack();
        },
        style: 'destructive',
      },
      { text: es_CL.commons.back },
    ],
    { cancelable: false },
  );
}

function BookingDetailScreen(props) {
  const { booking } = props;
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

      <Picker
        style={{width: 100}}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

      <Button
        title={es_CL.booking.actions.cancel}
        onPress={() => renderCancelAlert(props)}
        color={Colors.CANCEL_ERROR}
      />
      
    </View>
  );
}

BookingDetailScreen.navigationOptions = {
  headerTitle: es_CL.screens.bookingDetail.headerTitle,
  headerRight: renderEditButton,
};

export default withNavigation(BookingDetailScreen);


