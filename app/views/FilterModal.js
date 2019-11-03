import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Modal, Text, Button, StyleSheet, View, Platform, DatePickerIOS, DatePickerAndroid,
} from 'react-native';
import { applyFilters, resetFilters, hideFilters } from '../actions/filters_actions';
import es_CL from '../i18n/es-CL';
import { Spacing } from '../styles';
import SelectorWithIcon from '../components/SelectorWithIcon';
import moment from 'moment';
import { filterParseFormat, dateDisplay } from '../constants/date_formats';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    alignSelf: 'flex-end',
  },
  button: {
    marginBottom: Spacing.extraSmall,
  },
  titleContainer: {
  },
  title: {
    textAlign: 'center',
  },
  filtersContainer: {
    flex: 1,
  },
});

class FilterModal extends Component {

  constructor(props) {
    super(props);
    const { filters } = props;
    this.state = {
      filters,
      showRangeFrom: false,
      showRangeTo: false,
    };
  }

  setDate(date, filterState, showState) {
    const { filters } = this.state;
    const newFilter = { ...filters, [filterState]: moment(date) };
    this.setState({
      [showState]: Platform.OS === 'ios',
      filters: newFilter,
    });
  }

  renderDatePicker(dateState, showState) {
    if (!this.state[showState]) return null;
    console.log('dateState', this.state.filters[dateState].toDate());
    console.log('filters', this.state.filters);

    const filterDate = this.state.filters[dateState].toDate();


    if (Platform.OS === 'ios') {
      return (
        <DatePickerIOS
          date={filterDate}
          onDateChange={(date) => this.setDate(date, dateState, showState)}
          mode="date"
        />
      );
    }

    DatePickerAndroid.open(filterDate)
      .then(({ action, year, month, day }) => {
        if (action !== DatePickerAndroid.dateSetAction) return;
        const selectedDate = moment(`${year}-${month}-${day}`, filterParseFormat).toDate();
        this.setDate(selectedDate, dateState, showState);
      });
  }

  render() {
    const { filters, showRangeFrom, showRangeTo } = this.state;
    const { rangeFrom, rangeTo } = filters;
    const { handleApplyPress, handleResetPress, handleBackPress, visible } = this.props;

    console.log('rangeFrom', rangeFrom);
    console.log('rangeTo', rangeTo);

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Button
              title={es_CL.commons.back}
              onPress={handleBackPress}
            />
            <Text>OMG SOY UN MODAL</Text>
          </View>
          <Text> OMG filtros</Text>
          <View style={styles.filtersContainer}>
            <SelectorWithIcon
              label={es_CL.filters.start}
              element={rangeFrom.format(dateDisplay)}
              showIcon={false}
              onPress={() => this.setState({ showRangeFrom: !showRangeFrom })}
            />
            
            {this.renderDatePicker('rangeFrom', 'showRangeFrom')}

            <SelectorWithIcon
              label={es_CL.filters.end}
              element={rangeTo.format(dateDisplay)}
              showIcon={false}
              onPress={() => this.setState({ showRangeTo: !showRangeTo })}
            />

            {this.renderDatePicker('rangeTo', 'showRangeTo')}
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            title={es_CL.filters.apply}
            onPress={() => handleApplyPress()}
            style={styles.container}
          />
          <Button
            title={es_CL.filters.reset}
            onPress={handleResetPress}
          />
        </View>
      </Modal>
    );
  }
}

function mapStateToProps({ filters }) {
  const { visible, range_from, range_to } = filters;
  return {
    filters: {
      rangeFrom: moment(range_from, filterParseFormat),
      rangeTo: moment(range_to, filterParseFormat),
    },
    visible,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleApplyPress: () => { dispatch(applyFilters()); },
    handleResetPress: () => { dispatch(resetFilters()); },
    handleBackPress: () => { dispatch(hideFilters()); },
  };
}

const FilterModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterModal);

export default FilterModalContainer;