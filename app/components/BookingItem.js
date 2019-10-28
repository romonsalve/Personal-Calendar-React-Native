import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Spacing, Colors } from '../styles';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  timeContainer: {
    flex: 1,
    padding: Spacing.extraSmall,
    alignItems: 'flex-end',

  },
  infoContainer: {
    flex: 4,
    padding: Spacing.extraSmall,
  },
});

export default function BookingItem({ booking }) {
  const {
    start, end, service, location, client,
  } = booking;
  const clientName = `${client.first_name} ${client.last_name}`;
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text>{moment(start).format('HH:mm')}</Text>
        <Text>{moment(end).format('HH:mm')}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>{service}</Text>
        <Text>{location}</Text>
        <Text>{clientName}</Text>
      </View>
    </View>
  );
}

BookingItem.propTypes = {
  booking: PropTypes.shape({
    id: PropTypes.number,
    service_provider_id: PropTypes.number,
    service_id: PropTypes.number,
    location_id: PropTypes.number,
    price: PropTypes.number,
    status_id: PropTypes.number,
    service: PropTypes.string,
    service_provider: PropTypes.string,
    status: PropTypes.string,
    location: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    client: PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      email: PropTypes.string,
      identification: PropTypes.string,
    }),
  }).isRequired,
};
