import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Spacing, Colors } from '../styles';

const styles = StyleSheet.create({
  container: {
    padding: Spacing.extraSmall,
    backgroundColor: Colors.blue,
  },
});

export default function DateHeader({ dateText }) {
  return (
    <View style={styles.container}>
      <Text>{dateText}</Text>
    </View>
  );
}

DateHeader.propTypes = {
  dateText: PropTypes.string.isRequired,
};
