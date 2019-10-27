import { Text, View, SectionList, StyleSheet } from 'react-native';
import React, { Component } from 'react';


export default class BookingList extends Component {

  componentDidMount() {
    const {fetchBookings, status} = this.props;
    fetchBookings(status);
  };
  
  render() {
    const { isFetching, bookings } = this.props;
    
    if (isFetching) {
      return (
        <View style={ styles.container }>
          <Text>Loading</Text>
        </View>
      )
    }

    const data = bookings.map(booking => booking.id)
    const content = [{ title: "OMG", data: data}]

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SectionList
          sections={content}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Text>item</Text>}
          renderSectionHeader={({ section: { title } }) => (<Text>{title}</Text>)}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
