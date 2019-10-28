import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet, Text, View, Image, TouchableOpacity,
} from 'react-native';
import { Images, Spacing } from '../styles';

const styles = StyleSheet.create({
  icon: {
    ...Images.icon,
    marginBottom: Spacing.extraSmall,
  },
  selected: {
    alignItems: 'center',
    backgroundColor: '#9FA8DA',
  },
  noSelected: {
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

export default function NavigationMenuItem({
  icon, text, status, handlePress, selectedStatus,
}) {
  return (
    <TouchableOpacity onPress={() => handlePress(status)}>
      <View style={selectedStatus === status ? styles.selected : styles.noSelected}>
        <Image style={styles.icon} source={icon} />
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

NavigationMenuItem.propTypes = {
  icon: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  handlePress: PropTypes.func.isRequired,
  selectedStatus: PropTypes.number.isRequired,
};
