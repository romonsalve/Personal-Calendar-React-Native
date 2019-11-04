import React from 'react';
import {
  View, Button, Text, StyleSheet, Platform, StatusBar,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import moment from 'moment';
import es_CL from '../i18n/es-CL';
import { Spacing } from '../styles';
import { showFilters } from '../actions/filters_actions';
import FilterModalContainer from '../views/FilterModal';
import { filterParseFormat, dateDisplay } from '../constants/date_formats';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    height: 100,
    borderEndColor: 'black',
    borderBottomWidth: 1,
  },
  filterContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  filterText: {
    textAlign: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: Spacing.extraSmall,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
  },
});

function MainHeader(props) {
  const { visibleMainHeader } = props;
  if (!visibleMainHeader) return null;
  const {
    handleFilterPress, filters, count, currentStatus
  } = props;
  const status = es_CL.booking.status_plural[currentStatus];
  let filterText = '';
  const { apply } = filters;

  if (apply) {
    const { range_from, range_to } = filters;
    const startDate = moment(range_from, filterParseFormat).format(dateDisplay);
    const endDate = moment(range_to, filterParseFormat).format(dateDisplay);
    filterText = es_CL.filters.withFilterText(count, status, startDate, endDate);
  } else {
    filterText = es_CL.filters.noFilterText(count, status);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text>Personal Calendar</Text>
        </View>
        <View style={styles.button}>
          <Button
            title={es_CL.commons.filters}
            onPress={handleFilterPress}
          />
        </View>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>{filterText}</Text>
      </View>
      <FilterModalContainer />
    </View>
  );
}

function mapStateToProps({
  visibleMainHeader, filters, currentStatus, bookingsByStatus,
}) {
  return {
    visibleMainHeader,
    filters,
    currentStatus,
    count: bookingsByStatus[currentStatus] ? Object.keys(bookingsByStatus[currentStatus].bookings).length : 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleFilterPress: () => { dispatch(showFilters()); },
  };
}

const MainHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainHeader);

export default withNavigation(MainHeaderContainer);
