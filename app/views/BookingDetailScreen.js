import React from 'react';
import {
  Text, View, StyleSheet, Button, Alert, Picker,
} from 'react-native';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import { Spacing, Colors } from '../styles';
import es_CL from '../i18n/es-CL';
import DetailBackButtonContainer from '../components/DetailBackButton';
import { timeFormat, readableTimeFormat } from '../constants/date_formats';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.base,
  },
  infoContainer: {
    marginLeft: Spacing.small,
    marginBottom: Spacing.base,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: Spacing.extraSmall,
  },
  info: {
    marginBottom: Spacing.extraSmall,
  },
  dataContainer: {
    flex: 9,
  },
  buttonContainer: {
    flex: 1,
    color: Colors.CANCEL_ERROR,
  },
});

function renderEditButton(navigation) {
  return (
    <Button
      onPress={() => navigation.navigate('Edit')}
      title={es_CL.commons.edit}
    />
  );
}

function renderBackButton(navigation) {
  return (
    <DetailBackButtonContainer
      title={es_CL.commons.back}
      navigation={navigation}
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
  const formatDate = readableTimeFormat;
  const formatTime = timeFormat;
  const price = `$${booking.price}`;
  const start = moment(booking.start).format(formatTime);
  const end = moment(booking.end).format(formatTime);
  const clientName = `${booking.client.first_name} ${booking.client.last_name}`;
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{es_CL.booking.booking_info}</Text>
          <Text style={styles.info}>{booking.service}</Text>
          <Text style={styles.info}>{price}</Text>
          <Text style={styles.info}>{moment(booking.start).format(formatDate) }</Text>
          <Text style={styles.info}>{es_CL.booking.booking_time(start, end)}</Text>
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{es_CL.booking.client_info}</Text>
          <Text style={styles.info}>{clientName}</Text>
          <Text style={styles.info}>{booking.client.email}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={es_CL.booking.actions.cancel}
          onPress={() => renderCancelAlert(props)}
          color={Colors.CANCEL_ERROR}
        />
      </View>
      
      
    </View>
  );
}

BookingDetailScreen.navigationOptions = ({ navigation }) => (
  {
    headerTitle: es_CL.screens.bookingDetail.headerTitle,
    headerRight: renderEditButton(navigation),
    headerLeft: renderBackButton(navigation),
  }
);

export default withNavigation(BookingDetailScreen);


