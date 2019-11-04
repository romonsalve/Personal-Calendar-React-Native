import React from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { showMainHeader } from '../actions/visible_main_header_actions';

function DetailBackButton(props) {
  const { title, handlePress, navigation} = props;
  return (
    <Button
      title={title}
      onPress={() => handlePress(navigation)}
    />
  );
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    handlePress: (navigation) => {
      dispatch(showMainHeader());
      navigation.goBack();
    },
  };
}

const DetailBackButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailBackButton);

export default DetailBackButtonContainer;
