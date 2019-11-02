import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Text, Button } from 'react-native';
import { applyFilters } from '../actions/filters_actions';

function FilterModal(props) {
  const { filters, handleApplyPress} = props;
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={filters.visible}
      onRequestClose={() => {}}
    >
      <Text>OMG SOY UN MODAL</Text>
      <Button
        title="Apply Filters"
        onPress={() => handleApplyPress()}
      />
    </Modal>
  );
}

function mapStateToProps({ filters }) {
  return {
    filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleApplyPress: (status) => { dispatch(applyFilters(status)); },
  };
}

const FilterModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterModal);

export default FilterModalContainer;