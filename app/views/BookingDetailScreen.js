import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Buttons } from '../styles';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingInfo: {
    
  },
  time: {
    flex: 1,
    flexDirection: 'row',
  },
  clientInfo: {

  },
  cancelButton: {

  }
});

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
        <View style={styles.time}>
          <Text>{moment(booking.start).format(formatTime) }</Text>
          <Text>{moment(booking.end).format(formatTime) }</Text>
        </View>
      </View>
      
      <View style={styles.clientInfo}>
        <Text>{clientName}</Text>
        <Text>{booking.client.email}</Text>
      </View>
      
    </View>
  );
}
