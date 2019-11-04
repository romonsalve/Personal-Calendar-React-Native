import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Modal, Text, Button, StyleSheet, View, Platform, DatePickerIOS, DatePickerAndroid, StatusBar,
} from 'react-native';
import moment from 'moment';
import { applyFilters, resetFilters, hideFilters } from '../actions/filters_actions';
import es_CL from '../i18n/es-CL';
import { Spacing } from '../styles';
import SelectorWithIcon from '../components/SelectorWithIcon';
import { filterParseFormat, dateDisplay } from '../constants/date_formats';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
  buttonsContainer: {
  },
  button: {
    marginBottom: Spacing.small,
  },
  titleContainer: {
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
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
    const filterDate = this.state.filters[dateState].toDate();


    if (Platform.OS === 'ios') {
      return (
        <DatePickerIOS
          date={filterDate}
          onDateChange={(date) => this.setDate(date, dateState, showState)}
          mode="date"
          locale={'es'}
        />
      );
    }

    DatePickerAndroid.open(filterDate)
      .then(({ action, year, month, day }) => {
        if (action !== DatePickerAndroid.dateSetAction) return;
        const selectedDate = moment(`${year}-${month}-${day}`, filterParseFormat).toDate();
        this.setDate(selectedDate, dateState, showState);
      });
    
    return null;
  }

  render() {
    const { filters, showRangeFrom, showRangeTo } = this.state;
    const { rangeFrom, rangeTo } = filters;
    const { handleApplyPress, handleResetPress, handleBackPress, visible } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{es_CL.filters.title}</Text>
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
            onPress={() => handleApplyPress(filters)}
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
    handleApplyPress: (filters) => { dispatch(applyFilters(filters)); },
    handleResetPress: () => { dispatch(resetFilters()); },
    handleBackPress: () => { dispatch(hideFilters()); },
  };
}

const FilterModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterModal);

export default FilterModalContainer;