
import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {
  Text, View, StyleSheet, Button, Alert
} from 'react-native';
import { Spacing } from '../styles';
import esCL from '../i18n/es-CL';
import SelectorWithIcon from '../components/SelectorWithIcon';
import SaveHeaderButtonContainer from '../components/SaveHeaderButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: Spacing.small,
  },
  label: {
    flex: 2,
  },
  element: {
    flex: 3,
  },
  icon: {
    flex: 1,
    alignSelf: 'flex-end',
  },
});

const SERVICE_LIST = [
  { label: 'Servicio de prueba', value: 123 },
  { label: 'Prueba react', value: 345 }
]

function statusList() {
  const { status } = esCL.booking;
  return Object.keys(status).map((key) => (
    { label: status[key], value: parseInt(key, 10) }
  ));
}

function BookingEdit({ booking, navigation, updateBookingProperty }) {
  return (
    <View style={styles.container}>
      <SelectorWithIcon
        label={esCL.booking.properties.status}
        element={booking.status}
        icon=">"
        onPress={() => {
          navigation.navigate('SelectList', {
            options: statusList(),
            currentValue: booking.status_id,
            onPress: (_label, value) => {
              updateBookingProperty('status_id', value);
              updateBookingProperty('status', esCL.booking.status[value]);
            },
          });
        }}
      />
    </View>
  );
}

BookingEdit.navigationOptions = ({ navigation }) => ({
  headerTitle: esCL.screens.bookingEdit.headerTitle,
  headerRight: <SaveHeaderButtonContainer navigation={navigation} />,
});


export default withNavigation(BookingEdit);
