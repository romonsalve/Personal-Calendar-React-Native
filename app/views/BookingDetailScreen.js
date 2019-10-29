import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Buttons, Spacing } from '../styles';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingInfo: {
    flex: 1,
  },
  timeContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  timeText: {
    marginRight: Spacing.extraSmall,
  },
  clientInfo: {
    flex: 1,
  },
  cancelButton: {
  },
});

function renderEditButton() {
  return (
    <Button
      onPress={() => alert('This is a button!')}
      title='Editar'
    />
  );
}

export default function BookingDetailScreen({ navigation }) {

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
      
    </View>
  );
}

BookingDetailScreen.navigationOptions = {
  headerTitle: 'Detalles de la cita',
  headerRight: renderEditButton,
};
