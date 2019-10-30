import { Text, View, SectionList, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateHeader from './DateHeader';
import BookingItemContainer from './BookingItemContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default class BookingList extends Component {
  componentDidMount() {
    const { fetchBookings, status } = this.props;
    fetchBookings(status);
  }

  bookingsByDate() {
    const { bookings } = this.props;
    const bookingsGrouped = {};

    const bookingsSorted = bookings.sort((a, b) => new Date(a.start) > new Date(b.start));

    bookingsSorted.forEach((booking) => {
      const groupKey = moment(booking.start).format('ddd D MMMM YYYY');
      if (!Array.isArray(bookingsGrouped[groupKey])) { bookingsGrouped[groupKey] = []; }
      bookingsGrouped[groupKey].push(booking);
    });

    return Object.keys(bookingsGrouped).map((date) => {
      const data = bookingsGrouped[date];
      return { title: date, data };
    });
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) {
      return (
        <View style={styles.loadingContainer}>
          <Text>Loading</Text>
        </View>
      );
    }

    const sections = this.bookingsByDate();

    return (
      <View style={styles.container}>
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BookingItemContainer booking={item} />}
          renderSectionHeader={({ section: { title } }) => (<DateHeader dateText={title} />)}
        />
      </View>
    );
  }
}

BookingList.propTypes = {
  fetchBookings: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  bookings: PropTypes.arrayOf(PropTypes.shape({
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
    client: PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      email: PropTypes.string,
      identification: PropTypes.string,
    }),
  })).isRequired,

};
